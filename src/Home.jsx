import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import "./Home.css";  

// Import images
import img1 from "./assets/check_name_1.jpg";
import img2 from "./assets/flower_red.jpg";
import img3 from "./assets/grays_lily.jpg";
import img4 from "./assets/hellers_blazing_star.jpg";

const images = [img1, img2, img3, img4];

const Home = () => {
  const [visibleImages, setVisibleImages] = useState([]);

  // Update document title
  useEffect(() => {
    document.title = "SeedLink - Home";
  }, []);

  // Fade-in effect
  useEffect(() => {
    images.forEach((_, index) => {
      setTimeout(() => {
        setVisibleImages((prev) => [...prev, index]);
      }, index * 1000);
    });
  }, []);

  return (
    <Container className="home-container">
      {/* ✅ Row to hold text and image grid side by side */}
      <Row className="align-items-center">
        
        {/* ✅ Image Grid (Left) */}
        <Col md={4} className="d-flex justify-content-center">
          <Container className="image-container">
            <Row className="image-grid">
              {images.map((img, index) => (
                <Col xs={6} key={index} className="p-1 d-flex justify-content-center">
                  <Image
                    src={img}
                    alt={`Plant ${index + 1}`}
                    className={`image ${visibleImages.includes(index) ? "visible" : ""}`}
                    rounded
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Col>

        {/* ✅ Text Section (Right) */}
        <Col md={8} className="text-container">
          <h1 className="home-title">SeedLink</h1>
          <p className="home-description">
            Help save endangered plants by planting seeds in your local area.
          </p>
        </Col>

      </Row>
    </Container>
  );
};

export default Home;
