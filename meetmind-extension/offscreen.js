let mediaRecorder;
let recordedChunks = [];

chrome.runtime.onMessage.addListener(async (message) => {
  if (message.action === 'startOffscreenRecording') {
    startRecording(message.streamId);
  } else if (message.action === 'stopOffscreenRecording') {
    stopRecording();
  }
});

async function startRecording(streamId) {
  try {
    const media = await navigator.mediaDevices.getUserMedia({
      audio: {
        mandatory: {
          chromeMediaSource: 'tab',
          chromeMediaSourceId: streamId
        }
      }
    });

    // Continue to play the captured audio to the user
    const output = new AudioContext();
    const source = output.createMediaStreamSource(media);
    source.connect(output.destination);

    const options = { mimeType: 'audio/webm' };
    mediaRecorder = new MediaRecorder(media, options);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'audio/webm' });
      downloadRecording(blob);
      
      // Clear for next time
      recordedChunks = [];
      media.getTracks().forEach(t => t.stop());
    };

    mediaRecorder.start();
  } catch (err) {
    console.error('Failed to start recording:', err);
  }
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
  }
}

function downloadRecording(blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  a.href = url;
  a.download = `meetmind_recording_${new Date().getTime()}.webm`;
  a.click();
  
  // Cleanup
  setTimeout(() => {
    window.URL.revokeObjectURL(url);
  }, 100);
}
