const zoomButton = document.getElementById('zoomButton');

zoomButton.addEventListener('click', () => {
    // Check if we're already in fullscreen mode
    if (!document.fullscreenElement) {
        // Request fullscreen on the entire document
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error enabling full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        // Exit fullscreen mode
        document.exitFullscreen();
    }
});