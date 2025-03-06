// Select textarea and word count display
// Const textarea = document.querySelector('textarea');
const textarea = document.getElementById('text-area');
const wordCountDisplay = document.getElementById('word-count');
const userGoal = sessionStorage.getItem('goalWordCount') || '0';
const idleTime = sessionStorage.getItem('idleTime') || 15;

// Initialize word count
let wordCount = 0;
wordCountDisplay.textContent = `${wordCount} / ${userGoal}`;

// Timer variables
let inactivityTimer;
let colorInterval;
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
        clearInterval(colorInterval);
    }
}

// Add event listene to update word count when user types
textarea.addEventListener('input', updateWordCount);

function clearTextAfterInactivity() {
    console.log('Clearing text due to inactivity');
    textarea.value = ''; // Clear the text in the textarea
    updateWordCount(); // Update the word count to reflect the cleared text
    clearInterval(colorInterval); // Stop the color interval
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer); // Clear any existing timer
    clearInterval(colorInterval); // Stop any ongoing color change
    colorChange(); // Start changing the color
    inactivityTimer = setTimeout(clearTextAfterInactivity, idleTime * 1000); // Set a new 10-second timer
}

function colorChange() {
    timeElapsed = 0; // Reset time elapsed

    // Start the interval to change text color
    colorInterval = setInterval(() => {
        timeElapsed += 100; // Increment time elapsed by 100ms
        const progress = Math.min(timeElapsed / (idleTime * 1000), 1); // Progress from 0 to 1 over 10 seconds
        const greenAndBlueValue = Math.floor(255 * (1 - progress)); // Gradually reduce green and blue

        textarea.style.color = `rgb(255, ${greenAndBlueValue}, ${greenAndBlueValue})`; // Update the text color

        if (progress === 1) {
            clearInterval(colorInterval); // Stop interval when fully red
        }
    }, 100); // Update every 100ms
}