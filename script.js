const video = document.getElementById('video');
const playerButton = document.getElementById('player__button');
const rewindButton = document.getElementById('rewind');
const forwardButton = document.getElementById('forward');
const progressBar = document.getElementById('progress');
const progressFilled = document.getElementById('progress__filled');
const volumeInput = document.getElementById('volume');
const playbackSpeedInput = document.getElementById('playbackSpeed');

// Toggle play/pause
playerButton.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playerButton.textContent = '❚ ❚'; // Pause button
  } else {
    video.pause();
    playerButton.textContent = '►'; // Play button
  }
});

// Update progress bar as video plays
video.addEventListener('timeupdate', function() {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.value = progress;
  progressFilled.style.width = `${progress}%`;
});

// Seek to specific time on progress bar change
progressBar.addEventListener('input', function() {
  const seekTime = (progressBar.value / 100) * video.duration;
  video.currentTime = seekTime;
});

// Adjust volume
volumeInput.addEventListener('input', function() {
  video.volume = volumeInput.value / 100;
});

// Adjust playback speed
playbackSpeedInput.addEventListener('input', function() {
  video.playbackRate = playbackSpeedInput.value / 100;
});

// Rewind 10 seconds
rewindButton.addEventListener('click', function() {
  video.currentTime -= 10;
});

// Skip forward 25 seconds
forwardButton.addEventListener('click', function() {
  video.currentTime += 25;
});
