import dotenv from 'dotenv';
import fs from 'fs';
import { getSeedRecommendation } from './backend/mistralAI.js';

dotenv.config();

const seedInventory = JSON.parse(fs.readFileSync('./backend/seedInventory.json', 'utf8'));

(async () => {
    const location = "San Antonio, Texas, USA";
    const range = 20;
    const month = "April";
    const year = 2025;

    console.log("🌱 Running Seed Recommendation Query...");
    
    const recommendation = await getSeedRecommendation(location, range, seedInventory, month, year);

    if (recommendation) {
        console.log("\n🌍 **Best Seed Recommendation:**\n", recommendation);
    } else {
        console.log("⚠️ Failed to generate a seed recommendation.");
    }
})();
