// landing page constants
const title = document.getElementById('title');
const selectionMenu = document.getElementById('selection-menu');
const backButton = document.getElementById('back-button');
const writingStart = document.getElementById('begin-button');
const hoverMessage = document.getElementById('hover-message');
const goalInput = document.getElementById('goal-word-input');
const body = document.body;

// Add hover functionality to change the background color of the entire page
title.addEventListener('mouseenter', () => {
    body.style.backgroundColor = 'black';
});

title.addEventListener('mouseleave', () => {
    body.style.backgroundColor = '';
    title.style.color = 'black';
});

// Open selection menu
title.addEventListener('click', () => {
    body.style.backgroundColor = 'black';
    title.style.display = 'none';
    selectionMenu.style.display = 'block';
});

// Selection menu back button
backButton.addEventListener('click', () => {
    selectionMenu.style.display = 'none'
    title.style.display = 'flex';
});

// Select the slider and display elements
const idleTimeSlider = document.getElementById('idle-time-slider');
const idleTimeDisplay = document.getElementById('idle-time-display');

// Update the display when the slider value changes
idleTimeSlider.addEventListener('input', () => {
    idleTimeDisplay.textContent = idleTimeSlider.value; // Update the displayed value
});

goalInput.addEventListener('input', function () {
    // Remove any character that's not a digit.
    this.value = this.value.replace(/[^0-9]/g, '');
    // Limit to 5 digits.
    if (this.value.length > 5) {
        this.value = this.value.slice(0, 5);
    }
});

// Navigate to writing page
writingStart.addEventListener('click', () => {
    if (!goalInput.value.trim()) {
        goalInput.style.borderColor = 'red';
        goalInput.style.boxShadow = '0 0 5px red';
        event.preventDefault();
    } else {
        goalInput.style.borderColor = '';
        goalInput.style.boxShadow = '';

        const idleTime = idleTimeSlider.value;
        sessionStorage.setItem('idleTime', idleTime);

        const goal = goalInput.value.trim() || '0';
        sessionStorage.setItem('goalWordCount', goal);

        window.location.href = 'writing.html';
    }
});



