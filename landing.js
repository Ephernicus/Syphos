// landing page buttons
const modeAButton = document.getElementById('modeAButton');
const modeBButton = document.getElementById('modeBButton');

// navigate to mode A 
modeAButton.addEventListener('click', () => {
    console.log('button');
    window.location.href = 'modeA.html'; 
});

// navigate to mode B
modeBButton.addEventListener('click', () => {
    window.location.href = 'modeB.html'; 
});

