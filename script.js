// Select elements
const video = document.getElementById("video");
const playButton = document.getElementById("player__button");
const progressBar = document.getElementById("progress");
const progressFilled = document.querySelector(".progress__filled");
const volumeControl = document.getElementById("volume");
const speedControl = document.getElementById("playbackSpeed");
const rewindButton = document.getElementById("rewind__button");
const forwardButton = document.getElementById("forward__button");
const turnMessage = document.getElementById("turnMessage");

// Toggle play/pause
playButton.addEventListener("click", function() {
    if (video.paused) {
        video.play();
        playButton.textContent = "❚ ❚"; // Change button to pause symbol
    } else {
        video.pause();
        playButton.textContent = "►"; // Change button to play symbol
    }
});

// Update progress bar based on video time
video.addEventListener("timeupdate", function() {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
    progressFilled.style.width = `${progress}%`;
});

// Sync progress bar with user input
progressBar.addEventListener("input", function() {
    const newTime = (progressBar.value / 100) * video.duration;
    video.currentTime = newTime;
});

// Rewind video by 10 seconds
rewindButton.addEventListener("click", function() {
    video.currentTime -= 10;
});

// Forward video by 25 seconds
forwardButton.addEventListener("click", function() {
    video.currentTime += 25;
});

// Control volume
volumeControl.addEventListener("input", function() {
    video.volume = volumeControl.value;
});

// Control playback speed
speedControl.addEventListener("input", function() {
    video.playbackRate = speedControl.value;
});
