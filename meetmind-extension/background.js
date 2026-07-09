let isRecording = false;
let startTime = 0;
let recordingTimeoutId = null;
const MAX_RECORDING_TIME_MS = 60 * 60 * 1000; // 60 minutes auto-stop

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getState') {
    sendResponse({ isRecording, startTime });
  } else if (message.action === 'startRecording') {
    startRecording(message.tabId)
      .then(() => sendResponse({ success: true, startTime }))
      .catch(err => {
        console.error(err);
        sendResponse({ success: false });
      });
    return true; // Keep response channel open
  } else if (message.action === 'stopRecording') {
    stopRecording()
      .then(() => sendResponse({ success: true }))
      .catch(() => sendResponse({ success: false }));
    return true;
  }
});

async function startRecording(tabId) {
  if (isRecording) return;
  
  // Create offscreen document if it doesn't exist
  const existingContexts = await chrome.runtime.getContexts({});
  const offscreenDocument = existingContexts.find(
    (c) => c.contextType === 'OFFSCREEN_DOCUMENT'
  );

  if (!offscreenDocument) {
    await chrome.offscreen.createDocument({
      url: 'offscreen.html',
      reasons: ['USER_MEDIA'],
      justification: 'Recording tab audio for MeetMind'
    });
  }

  // Get stream ID for the active tab
  const streamId = await chrome.tabCapture.getMediaStreamId({ targetTabId: tabId });

  // Send stream ID to offscreen document to start recording
  chrome.runtime.sendMessage({
    action: 'startOffscreenRecording',
    streamId: streamId
  });

  isRecording = true;
  startTime = Date.now();
  
  // Auto stop recording after 60 minutes
  recordingTimeoutId = setTimeout(() => {
    stopRecording();
  }, MAX_RECORDING_TIME_MS);
}

async function stopRecording() {
  if (!isRecording) return;

  if (recordingTimeoutId) {
    clearTimeout(recordingTimeoutId);
    recordingTimeoutId = null;
  }

  chrome.runtime.sendMessage({
    action: 'stopOffscreenRecording'
  });

  isRecording = false;
  startTime = 0;
}
