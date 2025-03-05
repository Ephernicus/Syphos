// Get the font button and writing page container elements
const fontButton = document.getElementById('fontButton');
const writingPage = document.getElementById('writing-page');

// Assume you have 4 font options; adjust if you have more/less.
let currentFont = 1;
const maxFonts = 4;

// When the font button is clicked, cycle through the fonts.
fontButton.addEventListener('click', () => {
    // Remove the current font class
    writingPage.classList.remove(`font-${currentFont}`);
    wordCountDisplay.classList.remove(`font-${currentFont}`);

    // Cycle to the next font, wrapping back to 1 after maxFonts
    currentFont = currentFont === maxFonts ? 1 : currentFont + 1;

    // Add the new font class
    writingPage.classList.add(`font-${currentFont}`);
    wordCountDisplay.classList.add(`font-${currentFont}`);

    console.log(`Switched to font-${currentFont}`);
});
