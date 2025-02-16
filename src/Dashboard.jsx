import React, { useState } from "react";
import "./Dashboard.css";
import Slideshow from "./Slideshow"; 

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

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    const searchData = {
      month,
      day,
      city,
    };
    setSubmittedData(searchData);
    console.log("Search Data:", searchData);
  };

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

      <button className="search-button" onClick={handleSearch}>Search</button>

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
