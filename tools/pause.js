const pauseButton = document.getElementById('pauseButton');
const continueButton = document.getElementById('continue-button');
const restartButton = document.getElementById('restart-button');
const pauseMenu = document.getElementById('pause-menu');
const footer = document.getElementById('footer');


// Pause writing when pause button is clicked
pauseButton.addEventListener('click', () => {
    const pausedWordCount = document.getElementById('paused-word-count');

    // Stop the timers
    clearTimeout(inactivityTimer);
    clearInterval(fadeInterval);

    // Hide the writing elements
    textarea.style.display = 'none';
    wordCountDisplay.style.display = 'none';
    toolBar.style.display = 'none';
    footer.style.display = 'none';

    // Show the pause menu
    pauseMenu.style.display = 'block';

    // Update the pause menu with the current word count and goal
    const text = textarea.value.trim();
    const words = text.length > 0 ? text.split(/\s+/) : [];
    const currentWordCount = words.length;
    pausedWordCount.textContent = `Current word count: ${currentWordCount}`;

});

// Continue writing when continue button is clicked
continueButton.addEventListener('click', () => {
    // Hide the pause menu
    pauseMenu.style.display = 'none';

    // Show the writing elements again
    textarea.style.display = 'block';
    wordCountDisplay.style.display = 'block';
    toolBar.style.display = 'flex';
    footer.style.display = 'flex';


    // Resume the inactivity timer
    resetInactivityTimer();
});

// Restart return to landing page 
restartButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});