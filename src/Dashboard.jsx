import React, { useState } from "react";
import "./Dashboard.css";
import Slideshow from "./Slideshow"; 

const API_BASE_URL = "http://localhost:4000";

const counties = [
  "Los Angeles County, CA", "Cook County, IL", "Harris County, TX", "Maricopa County, AZ", "San Diego County, CA",
  "Orange County, CA", "Miami-Dade County, FL", "Dallas County, TX", "Kings County, NY", "Riverside County, CA",
  "Queens County, NY", "Clark County, NV", "King County, WA", "San Bernardino County, CA", "Tarrant County, TX",
  "Bexar County, TX", "Broward County, FL", "Santa Clara County, CA", "Wayne County, MI", "Alameda County, CA",
  "Middlesex County, MA", "Philadelphia County, PA", "Suffolk County, NY", "Sacramento County, CA", "Bronx County, NY",
  "Hillsborough County, FL", "Nassau County, NY", "Cuyahoga County, OH", "Palm Beach County, FL", "Allegheny County, PA",
  "Oakland County, MI", "Orange County, FL", "Hennepin County, MN", "Franklin County, OH", "Fairfax County, VA",
  "Travis County, TX", "Salt Lake County, UT", "Fulton County, GA", "Mecklenburg County, NC", "Montgomery County, MD",
  "Pima County, AZ", "Honolulu County, HI", "Westchester County, NY", "Milwaukee County, WI", "Wake County, NC",
  "Fresno County, CA", "Shelby County, TN", "Fairfield County, CT", "DuPage County, IL", "Erie County, NY",
  "Pinellas County, FL", "Marion County, IN", "Trumbull County, OH", "Hartford County, CT", "Bergen County, NJ",
  "Prince George's County, MD", "Monroe County, NY", "Duval County, FL", "Gwinnett County, GA", "Ventura County, CA",
  "Collin County, TX", "San Mateo County, CA", "St. Louis County, MO", "El Paso County, TX", "Washington County, OR",
  "Davidson County, TN", "Middlesex County, NJ", "Baltimore County, MD", "Oklahoma County, OK", "Multnomah County, OR",
  "Jefferson County, KY", "Providence County, RI", "Denton County, TX", "Hamilton County, OH", "Essex County, NJ",
  "Hudson County, NJ", "Fort Bend County, TX", "Jefferson County, CO", "Polk County, IA", "Cobb County, GA",
  "Bernalillo County, NM", "Jackson County, MO", "Anchorage Municipality, AK", "New Haven County, CT", "Macon County, IL",
  "Snohomish County, WA", "DeKalb County, GA", "Chester County, PA", "Jefferson County, AL", "Tulsa County, OK",
  "Kent County, MI", "Montgomery County, OH", "Summit County, OH", "Dane County, WI", "Bucks County, PA",
  "York County, PA", "Ocean County, NJ", "Montgomery County, PA", "New Castle County, DE", "Worcester County, MA",
  "El Paso County, CO", "Lancaster County, PA", "Lee County, FL", "Richmond County, NY", "Monmouth County, NJ",
  "Winnebago County, IL", "Leon County, FL", "Knox County, TN", "Johnson County, KS", "Washoe County, NV",
  "Davis County, UT", "Chittenden County, VT", "Plymouth County, MA", "Loudoun County, VA", "Boone County, MO",
  "Santa Barbara County, CA", "Spokane County, WA", "Reno County, KS", "Buncombe County, NC", "Garfield County, CO",
  "Whatcom County, WA", "Peoria County, IL", "Adams County, CO", "Rockland County, NY", "Stanislaus County, CA",
  "Madison County, AL", "Sedgwick County, KS", "Onondaga County, NY", "Dakota County, MN", "Tulare County, CA",
  "Passaic County, NJ", "Delaware County, OH", "Bristol County, MA", "Guilford County, NC", "Madison County, IL",
  "Hidalgo County, TX", "Maui County, HI", "Kanawha County, WV", "Lubbock County, TX", "Lucas County, OH",
  "Ramsey County, MN", "Deschutes County, OR", "Mahoning County, OH", "Yolo County, CA", "Cumberland County, ME",
  "Shelby County, AL", "Douglas County, NE", "Alachua County, FL", "Olmsted County, MN", "Racine County, WI",
  "Washington County, MN", "Clermont County, OH", "Mesa County, CO", "Yavapai County, AZ", "Jefferson Parish, LA",
  "Oneida County, NY", "Yakima County, WA", "Henrico County, VA", "Ector County, TX", "Placer County, CA",
  "Dougherty County, GA", "Kern County, CA", "Carroll County, MD", "Boulder County, CO", "Rockingham County, NH",
  "Forsyth County, GA", "Escambia County, FL", "Brazos County, TX", "Webb County, TX", "Catawba County, NC",
  "Hall County, GA", "Tuscaloosa County, AL", "Muscogee County, GA", "Lane County, OR", "Collier County, FL",
  "Moore County, NC", "Bay County, FL", "St. Lucie County, FL", "Camden County, NJ", "McLean County, IL",
  "Cumberland County, PA", "La Crosse County, WI", "Hernando County, FL", "San Luis Obispo County, CA", "Orange County, NC",
  "Douglas County, CO", "Roanoke County, VA", "Jefferson County, TX", "Tarrant County, TX", "Clackamas County, OR",
  "Ada County, ID", "Fayette County, KY", "Citrus County, FL", "Indian River County, FL", "Gaston County, NC",
  "Williamson County, TN", "Woodbury County, IA", "Shasta County, CA", "St. Clair County, IL", "Monroe County, MI",
  "Dona Ana County, NM", "Washington County, AR", "Richmond County, GA", "Columbia County, GA", "Greenville County, SC",
  "Boone County, IL", "Clinton County, NY", "Bay County, MI", "Sebastian County, AR", "Hendricks County, IN"
];
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
          {counties.map((c, index) => <option key={index} value={c}>{c}</option>)}
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
