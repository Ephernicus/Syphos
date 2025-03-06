document.getElementById('generateButton').addEventListener('click', async () => {
    const promptDisplay = document.getElementById('promptDisplay');
    promptDisplay.textContent = 'Generating...';
  
    try {
      const response = await fetch('http://localhost:3001/generate-prompt');
      const data = await response.json();
      promptDisplay.textContent = data.prompt;
    } catch (error) {
      promptDisplay.textContent = 'Error generating prompt.';
    }
  });