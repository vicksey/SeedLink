import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slideshow.css";
import Map from "./Map";

// Import images



const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1aRUiythd6eB2tA0bb07P-hqb6cDPvIa-PEqZ7uzmOiA/edit?usp=sharing";



const Slideshow = ({ selectedCity }) => {
  return (
    <Carousel className="slideshow-container">
      
      

      {/* Third slide with Google Maps */}
      <Carousel.Item>
        <div className="map-slide">
          <Map selectedCity={selectedCity} />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="google-sheet-slide">
          <iframe
            src={GOOGLE_SHEET_URL}
            width="100%"
            height="400px"
            style={{ border: "none" }}
            title="Google Sheets"
          ></iframe>
        </div>
      </Carousel.Item>

    </Carousel>
  );
};

export default Slideshow;

