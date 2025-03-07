// Select textarea and word count display
// Const textarea = document.querySelector('textarea');
const textarea = document.getElementById('text-area');
const wordCountDisplay = document.getElementById('word-count');
const userGoal = sessionStorage.getItem('goalWordCount') || '0';
const idleTime = sessionStorage.getItem('idleTime') || 15;

// ensures cursor stays in text area without needing to click 
document.addEventListener('DOMContentLoaded', () => {
    textarea.focus();
});
document.addEventListener('click', () => {
    textarea.focus();
});

// Initialize word count
let wordCount = 0;
wordCountDisplay.textContent = `${wordCount} / ${userGoal}`;

// Timer variables
let inactivityTimer;
let fadeInterval;
let timeElapsed = 0;

// Function to update the word count
function updateWordCount() {
    const text = textarea.value.trim();
    const words = text.match(/\b\w+\b/g) || [];
    wordCount = words.length; // update the wordCount variable

    if (wordCount >= userGoal) {
        // Turn the left number green; keep the rest normal
        wordCountDisplay.innerHTML = `<span style="color: #7CFC00;">${wordCount}</span> / ${userGoal}`;
        completeButton.style.display = 'block';
    } else {
        // All normal text
        wordCountDisplay.textContent = `${wordCount} / ${userGoal}`;
    }

    // If goal is not met, reset inactivity timer
    if (wordCount < userGoal) {
        resetInactivityTimer();
    } else {
        // Goal reached or exceeded: stop any timers, no auto-clear
        clearTimeout(inactivityTimer);
        clearInterval(fadeInterval);
    }
}

// Add event listene to update word count when user types
textarea.addEventListener('input', updateWordCount);

function clearTextAfterInactivity() {
    console.log('Clearing text due to inactivity');
    textarea.value = ''; // Clear the text in the textarea
    updateWordCount(); // Update the word count to reflect the cleared text
    clearInterval(fadeInterval); // Stop the color interval
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer); // Clear any existing timer
    clearInterval(fadeInterval); // Stop any ongoing color change
    textFade(); // Start fading
    inactivityTimer = setTimeout(clearTextAfterInactivity, idleTime * 1000); // Set a new 10-second timer
}

function textFade() {
    timeElapsed = 0; // Reset time elapsed

    // Start the interval to fade text
    fadeInterval = setInterval(() => {
        timeElapsed += 100; // Increment time elapsed by 100ms
        const progress = Math.min(timeElapsed / (idleTime * 1000), 1); // Progress from 0 to 1 over 10 seconds
        const newOpacity = 1 - progress;
        textarea.style.opacity = newOpacity;

        if (progress === 1) {
            clearInterval(fadeInterval); // Stop interval when invisible
        }
    }, 100); // Update every 100ms
}

