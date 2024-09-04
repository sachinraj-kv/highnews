import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>

    <footer style={{ backgroundColor: 'white', color: 'black', padding: '40px 0' }}>
    <Container>
      <Row>
        <Col md={4}>
          <h5>About Us</h5>
          <p>
            We provide the latest news on business, entertainment, sports, politics, tech, and education. Stay informed with accurate and reliable information.
          </p>
        </Col>
        <Col md={4}>
          <h5>Categories</h5>
          <ul className="list-unstyled">
            <li><a href="#business" style={{ color: 'black', textDecoration: 'none' }}>Business</a></li>
            <li><a href="#entertainment" style={{ color: 'black', textDecoration: 'none' }}>Entertainment</a></li>
            <li><a href="#sports" style={{ color: 'black', textDecoration: 'none' }}>Sports</a></li>
            <li><a href="#politics" style={{ color: 'black', textDecoration: 'none' }}>Politics</a></li>
            <li><a href="#tech" style={{ color: 'black', textDecoration: 'none' }}>Tech</a></li>
            <li><a href="#education" style={{ color: 'black', textDecoration: 'none' }}>Education</a></li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Follow Us</h5>
          <ul className="list-unstyled">
            <li><a href="https://www.facebook.com" style={{ color: 'black', textDecoration: 'none' }}>Facebook</a></li>
            <li><a href="https://www.twitter.com" style={{ color: 'black', textDecoration: 'none' }}>Twitter</a></li>
            <li><a href="https://www.instagram.com" style={{ color: 'black', textDecoration: 'none' }}>Instagram</a></li>
            <li><a href="https://www.linkedin.com" style={{ color: 'black', textDecoration: 'none' }}>LinkedIn</a></li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <p>&copy; 2024 NewsApp. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
  </div>

  )
}

export default Footer