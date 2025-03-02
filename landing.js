// landing page constants
const modeAButton = document.getElementById('modeAButton');
const modeBButton = document.getElementById('modeBButton');
const modeButtons = document.getElementById('landing-page');
const selectionMenuA = document.getElementById('selection-menu-a');
const selectionMenuB = document.getElementById('selection-menu-b');
const backButtonA = document.getElementById('back-button-a');
const backButtonB = document.getElementById('back-button-b');
const modeAStart = document.getElementById('begin-button-a');
const modeBStart = document.getElementById('begin-button-b');

// open mode A selection menu
modeAButton.addEventListener('click', () => {
    modeButtons.style.display = 'none'; // Hide mode buttons
    selectionMenuA.style.display = 'block'; // Show selection menu A
});

// selection menu a back button
backButtonA.addEventListener('click', () => {
    selectionMenuA.style.display = 'none'; // Hide Mode A menu
    modeButtons.style.display = 'block'; // Show landing page buttons
});

// selection menu b back button
backButtonB.addEventListener('click', () => {
    selectionMenuA.style.display = 'none'; // Hide Mode B menu
    modeButtons.style.display = 'block'; // Show landing page buttons
});

// Select the slider and display elements
const idleTimeSlider = document.getElementById('idle-time-slider');
const idleTimeDisplay = document.getElementById('idle-time-display');

// Update the display when the slider value changes
idleTimeSlider.addEventListener('input', () => {
    idleTimeDisplay.textContent = idleTimeSlider.value; // Update the displayed value
});

// open mode B selection menu
modeBButton.addEventListener('click', () => {
    modeButtons.style.display = 'none'; // Hide mode buttons
    selectionMenuB.style.display = 'block'; // Show selection menu B
});

// navigate to mode A
modeAStart.addEventListener('click', () => {
    const idleTime = idleTimeSlider.value; // Get the slider value
    sessionStorage.setItem('idleTime', idleTime);
    window.location.href = 'modeA.html'; 

});
// navigate to mode B
modeBStart.addEventListener('click', () => {
    window.location.href = 'modeB.html'; 
});


