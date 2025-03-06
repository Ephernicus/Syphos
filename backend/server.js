require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch'); 
const app = express();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.use(express.json());

app.get('/generate-prompt', async (req, res) => {
  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "Generate a one-sentence story prompt:",
        max_tokens: 20
      })
    });
    const data = await response.json();
    const prompt = data.choices && data.choices.length > 0 
      ? data.choices[0].text.trim() 
      : "No prompt generated.";
    res.json({ prompt });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error generating prompt.' });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));