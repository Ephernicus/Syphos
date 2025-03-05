const musicButton = document.getElementById('musicButton');

// List of track URLs (update these paths to your actual song files)
const tracks = [
    'tracks/song1.mp3',
    'tracks/song2.mp3',
    'tracks/song3.mp3'
];

// -1 means no music is playing.
let currentTrackIndex = -1;

// Create a global Audio object to play music.
const audio = new Audio();

musicButton.addEventListener('click', () => {
    if (currentTrackIndex === -1) {
        // First click: start track 1 looping
        currentTrackIndex = 0;
        audio.loop = true;  // Loop track 1 indefinitely if only one click happens
        audio.src = tracks[currentTrackIndex];
        audio.play();
        console.log(`Playing track 1 (looping): ${tracks[currentTrackIndex]}`);
    } else {
        // Subsequent clicks: move to the next track
        currentTrackIndex++;
        if (currentTrackIndex < tracks.length) {
            // For these tracks, disable looping
            audio.loop = false;
            audio.src = tracks[currentTrackIndex];
            audio.play();
            console.log(`Playing track ${currentTrackIndex + 1}: ${tracks[currentTrackIndex]}`);
        } else {
            // If we've cycled through all tracks, stop the music and reset
            audio.pause();
            audio.currentTime = 0;
            currentTrackIndex = -1;
            console.log('Music stopped.');
        }
    }
});
