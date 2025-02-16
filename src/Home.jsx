import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import "./Home.css";  
import Banner from "./Banner"; 

// images
import img1 from "./assets/check_name_1.jpg";
import img2 from "./assets/flower_red.jpg";
import img3 from "./assets/grays_lily.jpg";
import img4 from "./assets/hellers_blazing_star.jpg";

const images = [img1, img2, img3, img4];

const Home = () => {
  const [visibleImages, setVisibleImages] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  // Update document title
  useEffect(() => {
    document.title = "SeedLink - Home";
  }, []);

  // Handle fade-in effect for images
  useEffect(() => {
    images.forEach((_, index) => {
      setTimeout(() => {
        setVisibleImages((prev) => [...prev, index]);
      }, index * 1000);
    });
  }, []);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`home-container ${isScrolled ? "scrolled" : ""}`}>
      <Container className="title">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="home-title">SeedLink</h1>
          </Col>
        </Row>
      </Container>

      {/* Image & Text Row */}
      <Row className="d-flex justify-content-center mt-4">
        {/* Column for Images */}
        <Col md={6}>
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

        {/* Column for Text */}
        <Col md={6}>
          <div className="text-box">
            <p className="home-description">
              Do you want to save the world?
              Welcome to SeedLink! Here, you'll be one step closer to preventing plant extinction.  
              Join us in making a difference!
            </p>
          </div>
        </Col>
      </Row>

      <Banner />
    </div>
  );
};

export default Home;
