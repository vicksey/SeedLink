  import React, { useState } from "react";
  import "./Dashboard.css";
import "./Dashboard.css";
import Slideshow from "./Slideshow"; 

 const API_BASE_URL = "http://localhost:5000";

  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
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

    const handleMonthChange = (e) => {
      setMonth(e.target.value);
    };

    const handleDayChange = (e) => {
      setDay(e.target.value);
    };

    const handleCityChange = (e) => {
      setCity(e.target.value);
    };

    const handleSearch = async () => {
      const searchData = {
        month,
        day,
        city,
      };
      setSubmittedData(searchData);
      console.log("Search Data:", searchData);
  
      setLoading(true);
      setError(null);
  
      try {
        // Call agricultural report API
        const reportRes = await fetch(`${API_BASE_URL}/api/agriculture-report`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ city, range: 10 })
        });
        const reportData = await reportRes.json();
  
        if (!reportRes.ok) throw new Error(reportData.error || "Failed to fetch report");
        setReport(reportData.report);

        console.log(reportData.report);
  
        // Call seed recommendation API
        const analysisRes = await fetch(`${API_BASE_URL}/api/seed-recommendation`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ city, range: 10, month, year: 2025 })
        });
        const analysisData = await analysisRes.json();
  
        if (!analysisRes.ok) throw new Error(analysisData.error || "Failed to fetch analysis");
        setAnalysis(analysisData.analysis);
        print(analysisData.analysis);
      } catch (err) {
        setError(err.message);
        setReport(null);
        setAnalysis(null);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="dashboard-container">
        <h1 className="dashboard-title">Search Dashboard</h1>
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">User Dashboard</h1>

        <div className="input-group">
          <label htmlFor="month" className="input-label">Select Month:</label>
          <select
            id="month"
            className="input-field"
            value={month}
            onChange={handleMonthChange}
          >
            <option value="" disabled>Select a month</option>
            {months.map((m, index) => (
              <option key={index} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="day" className="input-label">Select Day:</label>
          <select
            id="day"
            className="input-field"
            value={day}
            onChange={handleDayChange}
          >
            <option value="" disabled>Select a day</option>
            {days.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="city" className="input-label">Select City:</label>
          <select
            id="city"
            className="input-field"
            value={city}
            onChange={handleCityChange}
          >
            <option value="" disabled>Select a city</option>
            {cities.map((c, index) => (
              <option key={index} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <button className="search-button" onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>

        {submittedData && (
          <div className="results">
            <h2>Search Results:</h2>
            <p>Month: {submittedData.month}</p>
            <p>Day: {submittedData.day}</p>
            <p>City: {submittedData.city}</p>
          </div>
        )}

        {error && <p className="error-message">❌ {error}</p>}

        {report && (
          <div className="results">
            <h3>🌍 Agricultural Report:</h3>
            <pre>{report}</pre>
          </div>
        )}

        {analysis && (
          <div className="results">
            <h3>🤖 AI Seed Recommendation:</h3>
            <pre>{analysis}</pre>
          </div>
        )}
      </div>
    );
  
      {submittedData && (
        <div className="results">
          <h2>User Input Results:</h2>
          <p>Month: {submittedData.month}</p>
          <p>Day: {submittedData.day}</p>
          <p>City: {submittedData.city}</p>
        </div>
      )}
    <Slideshow selectedCity={city} />
    </div>
  );
};

  export default Dashboard;
