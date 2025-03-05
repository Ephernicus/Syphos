const themeButton = document.getElementById('themeButton');
const bodyElement = document.body; 

let currentTheme = 1;
const maxThemes = 3;

themeButton.addEventListener('click', () => {
    // Remove the current theme class from <body>
    bodyElement.classList.remove(`theme-${currentTheme}`);

    // Cycle to the next theme, wrapping back to 1 after maxThemes
    currentTheme = currentTheme === maxThemes ? 1 : currentTheme + 1;

    // Add the new theme class to <body>
    bodyElement.classList.add(`theme-${currentTheme}`);

    console.log(`Switched to theme-${currentTheme}`);
});