// Select textarea and word count display
// Const textarea = document.querySelector('textarea');
const textarea = document.getElementById('text-area');
const wordCountDisplay = document.getElementById('word-count');
const userGoal = sessionStorage.getItem('goalWordCount') || '0';
const idleTime = sessionStorage.getItem('idleTime') || 15;

let wordCount = 0;
wordCountDisplay.textContent = `${wordCount} / ${userGoal}`;

// Function to update the word count
function updateWordCount() {
    const text = textarea.value.trim();
    const words = text.length > 0 ? text.split(/\s+/) : [];

    wordCount = words.length; // update the wordCount variable
    wordCountDisplay.textContent = `${wordCount} / ${userGoal}`;
    
    resetInactivityTimer();
}

// Add event listener to update word count when user types
textarea.addEventListener('input', updateWordCount);

// Timer variable for inactivity
let inactivityTimer;
let colorInterval;

// Counter for color change progress
let timeElapsed = 0;

function clearTextAfterInactivity() {
    console.log('Clearing text due to inactivity');
    textarea.value = ''; // Clear the text in the textarea
    updateWordCount(); // Update the word count to reflect the cleared text
    clearInterval(colorInterval); // Stop the color interval
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer); // Clear any existing timer
    clearInterval(colorInterval); // Stop any ongoing color change
    startColorChange(); // Start changing the color
    inactivityTimer = setTimeout(clearTextAfterInactivity, idleTime * 1000); // Set a new 10-second timer
}

function startColorChange() {
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