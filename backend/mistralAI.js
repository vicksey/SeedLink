require('dotenv').config();
const fetch = require('node-fetch');
const { getAgriculturalReport } = require('./perplexity'); 

const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat/completions';
const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;

async function getSeedRecommendation(location, range, seedInventory, month, year) {
    console.log(`Fetching climate report for ${location} over the past ${range} years...`);
    const report = await getAgriculturalReport(location, range);

    if (!report) {
        console.error("Failed to retrieve the agricultural report.");
        return null;
    }

    console.log("Climate report retrieved! Analyzing with Mistral AI...");

    const prompt = `Look into the seeds and what plants they grow into in which climates and regions around the world from our inventory ${JSON.stringify(seedInventory)}. 
    Using our report on the climate agricultural report from ${location}, ${report}, 
    what is the best seed to plant in ${location} in ${month}, ${year} to most benefit society and the earth in ${location}?`;

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${MISTRAL_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "mistral-small-latest",
            messages: [
                { role: "system", content: "Provide precise and useful agricultural insights." },
                { role: "user", content: prompt }
            ],
            max_tokens: 500,
            temperature: 0.3,
            top_p: 0.7,
            stream: false
        })
    };

    try {
        const response = await fetch(MISTRAL_API_URL, options);
        const data = await response.json();

        if (response.ok && data.choices) {
            return data.choices[0].message.content;
        } else {
            throw new Error(`API Error: ${data.error || "Unknown error"}`);
        }
    } catch (error) {
        console.error("Failed to fetch the seed recommendation:", error);
        return null;
    }
}

module.exports = { getSeedRecommendation };