import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row>
          <Col sm={12} md={2} className="text-center text-md-left mb-4 mb-md-0">
            <img
              src='https://www.starbucks.in/assets/icon/logo.png'
              width="40"
              height="40"
              alt="Starbucks Logo"
            />
          </Col>
          <Col sm={12} md={2} className="mb-4 mb-md-0">
            <h4 className='text-white'>About Us</h4>
            <ul className="list-unstyled text-white">
              <li>Our Heritage</li>
              <li>Coffee House</li>
              <li>Our Company</li>
            </ul>
          </Col>
          <Col sm={12} md={2} className="mb-4 mb-md-0">
            <h4 className='text-white'>Responsibility</h4>
            <ul className="list-unstyled text-white">
              <li>Diversity</li>
              <li>Community</li>
              <li>Ethical Sourcing</li>
              <li>Environmental Stewardship</li>
              <li>Learn More</li>
            </ul>
          </Col>
          <Col sm={12} md={2}>
            <h4 className='text-white'>Quick Links</h4>
            <ul className="list-unstyled text-white">
              <li>Privacy Policy</li>
              <li>FAQs</li>
              <li>Starbucks India Mobile <br />
                App Terms of Use</li>
              <li>Customer Service</li>
              <li>Starbucks Reward Day Offer</li>
              <li>Delivery</li>
              <li>Season's Gifting</li>
              <li>Offer for Beverage <br />
                Subscription at <br />
                Starbucks</li>
              <li>Beverage Subscription</li>
            </ul>
          </Col>
          <Col sm={12} md={2}>
            <h4 className='text-white'>Social Media</h4>
            <ul className="list-unstyled d-flex text-white ">
              <li><FontAwesomeIcon icon={faInstagram} className='me-2' size='2x' /></li>
              <li><FontAwesomeIcon icon={faFacebook} className='me-2' size='2x' /></li>
              <li><FontAwesomeIcon icon={faTwitter} className='me-2' size='2x' /></li>
            </ul>
          </Col>
          <Col sm={12} md={2}>
            <div>
              <button className='btn btn-light w-100 mb-2'>
                <FontAwesomeIcon className='me-2' icon={faApple} size='2x' />Download on the <span className='fw-bold'>App Store</span>
              </button>
              <button className='btn btn-light w-100'>
                <FontAwesomeIcon className='me-2 text-danger' icon={faGooglePlay} size='2x' />Get it on <br /><span className='fw-bold'>Google Play</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
