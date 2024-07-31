import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src='https://www.starbucks.in/assets/icon/logo.png'
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Starbucks Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto'>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Gift</Nav.Link>
              <Nav.Link href="#pricing">Order</Nav.Link>
              <Nav.Link href="#pricing">Pay</Nav.Link>
              <Nav.Link href="#pricing">Store</Nav.Link>
            </Nav>
            <div className='d-flex align-items-center'>
              <div className='search-bar'>
                <input
                  type="text"
                  className='form-control ms-2'
                  placeholder='Looking for something specific?'
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
              </div>
              <FontAwesomeIcon icon={faUser} className='ms-3' />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
