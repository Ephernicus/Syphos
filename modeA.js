// Select textarea and word count display
// const textarea = document.querySelector('textarea');
const textarea = document.getElementById('textA');
const wordCountDisplay = document.getElementById('word-count');

// Function to update the word count
function updateWordCount() {
    console.log('update word count');
    const text = textarea.value.trim(); // Get trimmed text from textarea
    const words = text.length > 0 ? text.split(/\s+/) : []; // Split text into words
    const wordCount = words.length; // Count the number of words
    wordCountDisplay.textContent = `Word Count: ${wordCount}`; // Update the word count display

    // Reset inactivity timer whenever user types
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
    textarea.style.color = ''; // Reset the text color
    updateWordCount(); // Update the word count to reflect the cleared text
    clearInterval(colorInterval); // Stop the color interval
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer); // Clear any existing timer
    clearInterval(colorInterval); // Clear any existing color change interval
    startColorChange(); // Start changing the color
    inactivityTimer = setTimeout(clearTextAfterInactivity, 15000); // Set a new 15-second timer
}

function startColorChange() {
    timeElapsed = 0; // Reset time elapsed
    textarea.style.color = ''; // Reset the text color

    // Start the interval to change text color
    colorInterval = setInterval(() => {
        timeElapsed += 100; // Increment time elapsed (in milliseconds)
        const progress = Math.min(timeElapsed / 15000, 1); // Calculate progress (0 to 1)
        const redValue = Math.floor(255 * progress); // Gradually increase red component
        textarea.style.color = `rgb(${redValue}, 0, 0)`; // Set color to gradually change to red

        if (progress === 1) {
            clearInterval(colorInterval); // Stop interval when fully red
        }
    }, 100); // Update every 100ms
}