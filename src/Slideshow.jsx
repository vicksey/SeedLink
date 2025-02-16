import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slideshow.css";
import Map from "./Map";

// Import images
import img1 from "./assets/red.png";
import img2 from "./assets/green.png";
import img4 from "./assets/green.png";

const Slideshow = ({ selectedCity }) => {
  return (
    <Carousel className="slideshow-container">
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>

      {/* Third slide with Google Maps */}
      <Carousel.Item>
        <div className="map-slide">
          <Map selectedCity={selectedCity} />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;

