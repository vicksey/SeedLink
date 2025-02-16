import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import "./Home.css";  
import Banner from "./Banner"; 

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

  // Fade-in Effect
  useEffect(() => {
    images.forEach((_, index) => {
      setTimeout(() => {
        setVisibleImages((prev) => [...prev, index]);
      }, index * 1000);
    });
  }, []);

  return (

    <div>
    <Container className="home-container">
      {/* ✅ Title Section */}
      <Container className="title">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="home-title">SeedLink</h1>
          </Col>
        </Row>
      </Container>

      {/* ✅ Image & Text Row */}
      <Row className="align-items-center mt-4">
        {/* ✅ Column for Images (Left) */}
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

        {/* ✅ Column for Text (Right) */}
        <Col md={6} className="text-container">
          <p className="home-description">
            🌿 **Do you want to save the world?**  
            Welcome to **SeedLink**! 🌱 Here, you'll be one step closer to preventing plant extinction.  
            Join us in making a difference!
          </p>
        </Col>
      </Row>
    </Container>


      <Banner />
      
</div>
  );
};

export default Home;
