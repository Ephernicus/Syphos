document.getElementById('generateButton').addEventListener('click', async () => {
    const promptDisplay = document.getElementById('promptDisplay');
    promptDisplay.textContent = 'Generating...';

    try {
        const response = await fetch('https://syphos-backend.onrender.com/generate-prompt', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                prompt: "Write a short and creative one-sentence story prompt. Max 100 characters."
            })
        });

        const data = await response.json();
        promptDisplay.textContent = data.result;
        console.log(data);
    } catch (error) {
        promptDisplay.textContent = 'Error generating prompt.';
        console.log(error);
    }
});