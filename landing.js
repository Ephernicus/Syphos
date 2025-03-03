// landing page constants
const landingButton = document.getElementById('landing-page');
const selectionMenu = document.getElementById('selection-menu');
const backButton = document.getElementById('back-button');
const writingStart = document.getElementById('begin-button');
const hoverMessage = document.getElementById('hover-message');

// open  selection menu
landingButton.addEventListener('click', () => {
    landingButton.style.display = 'none'; // Hide landing button
    selectionMenu.style.display = 'block'; // Show selection menu 
});

// Display message when hovering over landing button
landingButton.addEventListener('mouseenter', () => {
    hoverMessage.textContent = "Let the challenge begin!";
    hoverMessage.style.visibility = 'visible';
});
landingButton.addEventListener('mouseleave', () => {
    hoverMessage.style.visibility = 'hidden';
});

// selection menu back button
backButton.addEventListener('click', () => {
    selectionMenu.style.display = 'none'; // Hide selection menu
    landingButton.style.display = 'block'; // Show landing page button
});

// Select the slider and display elements
const idleTimeSlider = document.getElementById('idle-time-slider');
const idleTimeDisplay = document.getElementById('idle-time-display');

// Update the display when the slider value changes
idleTimeSlider.addEventListener('input', () => {
    idleTimeDisplay.textContent = idleTimeSlider.value; // Update the displayed value
});

// navigate to writing page
writingStart.addEventListener('click', () => {
    const idleTime = idleTimeSlider.value; // Get the slider value
    sessionStorage.setItem('idleTime', idleTime);
    window.location.href = 'writing.html';
});



