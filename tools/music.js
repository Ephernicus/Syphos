const musicButton = document.getElementById('musicButton');

// List of track URLs
const tracks = [
  'tracks/rain.mp3',
  'tracks/birds.mp3',
  'tracks/waves.mp3',
  'tracks/fireplace.mp3'
];

let currentTrackIndex = -1;
const audio = new Audio();

musicButton.addEventListener('click', () => {
  if (currentTrackIndex === -1) {
    // First click: start track 1 looping
    currentTrackIndex = 0;
    audio.loop = true;
    audio.src = tracks[currentTrackIndex];
    audio.play();
    musicButton.style.opacity = 1; 
    console.log(`Playing track 1 (looping): ${tracks[currentTrackIndex]}`);
  } else {
    // Subsequent clicks: move to the next track
    currentTrackIndex++;
    if (currentTrackIndex < tracks.length) {
      // Keep looping for subsequent tracks too
      audio.loop = true;
      audio.src = tracks[currentTrackIndex];
      audio.play();
      console.log(`Playing track ${currentTrackIndex + 1}: ${tracks[currentTrackIndex]}`);
    } else {
      // If we've cycled through all tracks, stop the music and reset
      audio.pause();
      audio.currentTime = 0;
      currentTrackIndex = -1;
      musicButton.style.opacity = 0.5; 
      console.log('Music stopped.');
    }
  }
});