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

  return (
    <>
      {/* First container with the background color #104030 */}
      <div className="full-screen-container">
        <Container fluid className="image-container">

          <Row className="image-grid justify-content-center">
            {images.map((img, index) => (
              <Col xs={6} sm={4} md={3} lg={3} key={index} className="p-1 d-flex justify-content-center">
                <Image
                  src={img}
                  alt={`Plant ${index + 1}`}
                  className={`image ${visibleImages.includes(index) ? "visible" : ""}`}
                  rounded
                />
              </Col>
            ))}
          </Row>
          {/* Title and subtitle inside the green container */}
          <Row className="justify-content-center text-center">
            <Col xs={12} className="text-center">
              <h1 className="home-title">SeedLink</h1>
              <p className="home-subtitle">
                Do you want to save the world? Welcome to SeedLink! Here, you'll be one step closer to preventing plant extinction. Join us in making a difference!
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Second container with white background */}
      <div className="second-container">
        <Banner />
      </div>
    </>
  );
};

export default Home;
