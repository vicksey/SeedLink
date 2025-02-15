require('dotenv').config();
const fetch = require('node-fetch');

const PERPLEXITY_API_URL = 'https://api.perplexity.ai/chat/completions';
const API_KEY = process.env.PERPLEXITY_API_KEY;

async function getAgriculturalReport(location, range) {
    const prompt = `Give me a detailed report of ${location}'s agricultural climate for analysis later of the last ${range} years.`;

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "sonar",
            messages: [
                { role: "system", content: "Be precise and concise." },
                { role: "user", content: prompt }
            ],
            max_tokens: 2500,
            temperature: 0.2,
            top_p: 0.5,
            stream: false
        })
    };

    try {
        const response = await fetch(PERPLEXITY_API_URL, options);
        const data = await response.json();

        if (response.ok && data.choices) {
            const report = data.choices[0].message.content; 
            return report;
        } else {
            throw new Error(`API Error: ${data.error || "Unknown error"}`);
        }
    } catch (error) {
        console.error("Failed to fetch the agricultural report:", error);
        return null;
    }
}

module.exports = { getAgriculturalReport };