const completionMenu = document.getElementById('completion-menu');
const resumeButton = document.getElementById('resume-button');
const exportButton = document.getElementById('export-button');
const mainMenuButton = document.getElementById('main-menu-button');

// Pull up completion menu once complete button is clicked
completeButton.addEventListener('click', () => {
    textarea.style.display = 'none';
    wordCountDisplay.style.display = 'none';
    toolBar.style.display = 'none';
    footer.style.display = 'none';

    // Show the completion menu
    completionMenu.style.display = 'block';
});

// Continue writing when continue button is clicked,
resumeButton.addEventListener('click', () => {
    completionMenu.style.display = 'none';

    textarea.style.display = 'block';
    wordCountDisplay.style.display = 'block';
    toolBar.style.display = 'flex';
    footer.style.display = 'flex';
});

// Export the text content as a .txt file 
exportButton.addEventListener('click', () => {
    const textToExport = textarea.value;
    const blob = new Blob([textToExport], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'export.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Navigate to the landing page
mainMenuButton.addEventListener('click', () => {
    window.location.href = 'landing.html';
});

