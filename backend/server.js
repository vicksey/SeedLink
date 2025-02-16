import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import getAgriculturalReport from "./perplexity.js";
import { getSeedRecommendation } from "./mistralAI.js";
import seedInventory from "./seedInventory.json" assert { type: "json" };

dotenv.config();
const app = express();
const PORT = 4000;

app.use(cors()); // Allows the frontend to make requests to the backend
app.use(express.json());

// 🌍 Endpoint to get the agricultural report
app.post("/api/agriculture-report", async (req, res) => {
    const { city, range } = req.body;
    if (!city || !range) return res.status(400).json({ error: "Missing parameters" });

    try {
        const report = await getAgriculturalReport(city, range);
        res.json({ report });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 🌱 Endpoint to get seed recommendations
app.post("/api/seed-recommendation", async (req, res) => {
    const { city, range, month, year } = req.body;
    if (!city || !range || !month || !year) return res.status(400).json({ error: "Missing parameters" });

    try {
        const analysis = await getSeedRecommendation(city, range, seedInventory, month, year);
        res.json({ analysis });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
