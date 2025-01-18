// Select textarea and word count display
// const textarea = document.querySelector('textarea');
const textarea = document.getElementById('textB');
const wordCountDisplay = document.getElementById('word-count');

// Function to update the word count
function updateWordCount() {
    console.log('update word count');
    const text = textarea.value.trim(); // Get trimmed text from textarea
    const words = text.length > 0 ? text.split(/\s+/) : []; // Split text into words
    const wordCount = words.length; // Count the number of words
    wordCountDisplay.textContent = `Word Count: ${wordCount}`; // Update the word count display
}

// Add event listener to update word count when user types
textarea.addEventListener('input', updateWordCount);