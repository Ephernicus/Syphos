const soundButton = document.getElementById('soundButton');

// Array of typing sound file paths 
const soundFiles = ['tracks/key1.mp3', 'tracks/key2.mp3', 'tracks/key3.mp3'];

// Toggle state for sound effects
let soundEnabled = false;

// When the user clicks the sound button, toggle sound on/off
soundButton.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    console.log("Sound enabled:", soundEnabled);
    soundButton.style.opacity = soundEnabled ? 1 : 0.5;
});

// Every time the user types, play a random sound if sound is enabled
textarea.addEventListener('input', () => {
    if (!soundEnabled) return;
    // Randomize which sound file to play
    const randomIndex = Math.floor(Math.random() * soundFiles.length);
    console.log("Playing sound:", soundFiles);
    const audio = new Audio(soundFiles[randomIndex]);
    audio.play();
});