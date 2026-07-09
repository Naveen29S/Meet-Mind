document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  const statusEl = document.getElementById('statusContainer');
  const timerEl = document.getElementById('timer');
  let timerInterval = null;

  // Check current state when popup opens
  chrome.runtime.sendMessage({ action: 'getState' }, (response) => {
    if (response && response.isRecording) {
      setRecordingState(response.startTime);
    }
  });

  startBtn.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      chrome.runtime.sendMessage({ action: 'startRecording', tabId: currentTab.id }, (response) => {
        if (response && response.success) {
          setRecordingState(response.startTime);
        } else {
          statusEl.textContent = 'Error starting recording.';
        }
      });
    });
  });

  stopBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'stopRecording' }, (response) => {
      setIdleState();
      statusEl.textContent = 'Recording saved. Check your downloads!';
    });
  });

  function updateTimer(startTime) {
    const elapsed = Date.now() - startTime;
    const hours = Math.floor(elapsed / 3600000);
    const minutes = Math.floor((elapsed % 3600000) / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    
    timerEl.textContent = 
      String(hours).padStart(2, '0') + ':' +
      String(minutes).padStart(2, '0') + ':' +
      String(seconds).padStart(2, '0');
  }

  function setRecordingState(startTime) {
    startBtn.classList.add('hidden');
    stopBtn.classList.remove('hidden');
    document.body.classList.add('recording');
    statusEl.textContent = 'Recording in progress... (Auto stops at 60m)';
    
    // Start updating timer
    if (timerInterval) clearInterval(timerInterval);
    updateTimer(startTime);
    timerInterval = setInterval(() => updateTimer(startTime), 1000);
  }

  function setIdleState() {
    startBtn.classList.remove('hidden');
    stopBtn.classList.add('hidden');
    document.body.classList.remove('recording');
    
    // Stop timer
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    timerEl.textContent = '00:00:00';
  }
});
