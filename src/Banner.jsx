import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import "./Home.css";  

import banner1 from "./assets/tree_placehooer.png";
import banner2 from "./assets/images.png";
import banner3 from "./assets/hand_heart.jpg";

const bannerImages = [banner1, banner2, banner3];

const Banner = () => {
  const [visibleBanners, setVisibleBanners] = useState([]);

  // Fade-in Banner
  useEffect(() => {
    bannerImages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleBanners((prev) => [...prev, index]);
      }, index * 1000);
    });
  }, []);

  return (
    <div className="banner">
      <Container fluid className="py-4">
        <Row className="justify-content-center">
          {bannerImages.map((img, index) => (
            <Col xs={12} md={4} key={index} className="d-flex justify-content-center">
              <Image
                src={img}
                alt={`Banner ${index + 1}`}
                className={`banner-image ${visibleBanners.includes(index) ? "visible" : ""}`}
                roundedCircle
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
