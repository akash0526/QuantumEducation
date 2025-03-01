// src/components/common/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@educonsult.com</p>
            <p>Phone: +977-1234567890</p>
            <p>Address: Kathmandu, Nepal</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/tests" className="text-white">Test Services</a></li>
              <li><a href="/countries" className="text-white">Countries</a></li>
              <li><a href="/contact" className="text-white">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" className="text-white">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-white">Twitter</a></li>
              <li><a href="https://instagram.com" className="text-white">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2023 EduConsult. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
