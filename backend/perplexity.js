import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const PERPLEXITY_API_URL = 'https://api.perplexity.ai/chat/completions';
const API_KEY = process.env.PERPLEXITY_API_KEY;

async function getAgriculturalReport(location, range) {
    const prompt = `Give me a highly detailed report of ${location}'s agricultural climate and natural crops so that it can be analyzed for future growth efforts in the last ${range} years.`;

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "sonar",
            messages: [
                { role: "system", content: "Be extensive and detailed." },
                { role: "user", content: prompt }
            ],
            max_tokens: 10000,
            temperature: 0.7,
            top_p: 0.9,
            stream: false
        })
    };

    try {
        const response = await fetch(PERPLEXITY_API_URL, options);
        const data = await response.json();

        if (response.ok && data.choices) {
            return data.choices[0].message.content;
        } else {
            throw new Error(`API Error: ${data.error || "Unknown error"}`);
        }
    } catch (error) {
        console.error("Failed to fetch the agricultural report:", error);
        return null;
    }
}

export default getAgriculturalReport;