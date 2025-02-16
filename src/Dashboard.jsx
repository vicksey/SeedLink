import React, { useState } from "react";
import "./Dashboard.css";
import Slideshow from "./Slideshow"; 

const API_BASE_URL = "http://localhost:4000";

const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Austin", "Dallas"];
const months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
const days = Array.from({ length: 31 }, (_, i) => i + 1);

const Dashboard = () => {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [city, setCity] = useState("");

  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [report, setReport] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const handleMonthChange = (e) => setMonth(e.target.value);
  const handleDayChange = (e) => setDay(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

  const handleSearch = async () => {
    const searchData = { month, day, city };
    setSubmittedData(searchData);
    console.log("Search Data:", searchData);

    setLoading(true);
    setError(null);

    try {
      // Fetch agricultural report
      const reportRes = await fetch(`${API_BASE_URL}/api/agriculture-report`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city, range: 10 })
      });
      const reportData = await reportRes.json();
      if (!reportRes.ok) throw new Error(reportData.error || "Failed to fetch report");
      setReport(reportData.report);

      // Fetch seed recommendation
      const analysisRes = await fetch(`${API_BASE_URL}/api/seed-recommendation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city, range: 10, month, year: 2025 })
      });
      const analysisData = await analysisRes.json();
      if (!analysisRes.ok) throw new Error(analysisData.error || "Failed to fetch analysis");
      setAnalysis(analysisData.analysis);

    } catch (err) {
      setError(err.message);
      setReport(null);
      setAnalysis(null);
    } finally {
      setLoading(false);
    }
  };

  // 📌 Function to format the report (Markdown-like to HTML)
  const formatText = (text) => {
    return text.split("\n").map((line, index) => {
      // Convert markdown bold **text** → <strong>text</strong>
      line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  
      // Remove extra bullets by handling markdown-style lists correctly
      if (line.startsWith("- ")) return <li key={index} dangerouslySetInnerHTML={{ __html: line.replace("- ", "") }} />;
  
      if (line.startsWith("###")) return <h4 key={index} dangerouslySetInnerHTML={{ __html: line.replace("###", "") }} />;
      if (line.startsWith("##")) return <h3 key={index} dangerouslySetInnerHTML={{ __html: line.replace("##", "") }} />;
      if (line.startsWith("#")) return <h2 key={index} dangerouslySetInnerHTML={{ __html: line.replace("#", "") }} />;
      if (line.trim() === "") return <br key={index} />;
      
      return <p key={index} dangerouslySetInnerHTML={{ __html: line }} />;
    });
  };
  
  

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Search Dashboard</h1>

      <div className="input-group">
        <label htmlFor="month" className="input-label">Select Month:</label>
        <select id="month" className="input-field" value={month} onChange={handleMonthChange}>
          <option value="" disabled>Select a month</option>
          {months.map((m, index) => <option key={index} value={m}>{m}</option>)}
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="day" className="input-label">Select Day:</label>
        <select id="day" className="input-field" value={day} onChange={handleDayChange}>
          <option value="" disabled>Select a day</option>
          {days.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="city" className="input-label">Select City:</label>
        <select id="city" className="input-field" value={city} onChange={handleCityChange}>
          <option value="" disabled>Select a city</option>
          {cities.map((c, index) => <option key={index} value={c}>{c}</option>)}
        </select>
      </div>

      <button className="search-button" onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <p className="error-message">❌ {error}</p>}

      {report && (
        <div className="report-container">
          <h3>🌍 Agricultural Report for {city}</h3>
          <div className="formatted-report">{formatText(report)}</div>
        </div>
      )}

      {analysis && (
        <div className="report-container">
          <h3>🤖 AI Seed Recommendation:</h3>
          <div className="formatted-report">{formatText(analysis)}</div>
        </div>
      )}

      <Slideshow selectedCity={city} />
    </div>
  );
};

export default Dashboard;
