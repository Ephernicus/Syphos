// landing page constants
const modeAButton = document.getElementById('modeAButton');
const modeBButton = document.getElementById('modeBButton');
const modeButtons = document.getElementById('landing-page');
const selectionMenuA = document.getElementById('selection-menu-a');
const selectionMenuB = document.getElementById('selection-menu-b');
const modeAStart = document.getElementById('begin-button-a');
const modeBStart = document.getElementById('begin-button-b');

// open mode A selection menu
modeAButton.addEventListener('click', () => {
    modeButtons.style.display = 'none'; // Hide mode buttons
    selectionMenuA.style.display = 'block'; // Show selection menu A
});
// open mode B selection menu
modeBButton.addEventListener('click', () => {
    modeButtons.style.display = 'none'; // Hide mode buttons
    selectionMenuB.style.display = 'block'; // Show selection menu B
});

// navigate to mode A
modeAStart.addEventListener('click', () => {
    console.log('button');
    window.location.href = 'modeA.html'; 
});
// navigate to mode B
modeBStart.addEventListener('click', () => {
    window.location.href = 'modeB.html'; 
});


