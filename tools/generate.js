document.getElementById('generateButton').addEventListener('click', async () => {
    const promptDisplay = document.getElementById('promptDisplay');
    promptDisplay.textContent = 'Generating...';

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions',
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer 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"
                },
                method: "post",
                body: JSON.stringify({
                    "model": "gpt-4o",
                    "messages": [
                        {
                            "role": "developer",
                            "content": "Use concise language"
                        },
                        {
                            "role": "user",
                            "content": "Write a short and creative one sentence story prompt"
                        }
                    ]
                })
            });

        const data = await response.json();
        promptDisplay.textContent = data.choices[0].message.content.trim();
        console.log(data);
    } catch (error) {
        promptDisplay.textContent = 'Error generating prompt.';
        console.log(error);
    }
});