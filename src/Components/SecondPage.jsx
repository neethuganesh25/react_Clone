import React from 'react';
import './Second.css';
import { Card, Col, Row } from 'react-bootstrap';

function SecondPage() {
  return (
    <>
      <div className='container custom-page mt-4'>
        <h3 className='m-3'>HandCrafted Curations</h3>

        <Row>
          <Col sm={12} md={2} className='text-center mb-4'>
            <img
              src="https://www.starbucks.in/assets/icon/Bestseller.webp"
              width={'80%'} height={'80%'}
              className='rounded-circle'
              alt="Best Seller"
            />
            <p>Best Seller</p>
          </Col>
          <Col sm={12} md={2} className='text-center mb-4'>
            <img
              src="https://www.starbucks.in/assets/icon/Drinks.webp"
              width={'80%'} height={'80%'}
              className='rounded-circle'
              alt="Drinks"
            />
            <p>Drinks</p>
          </Col>
          <Col sm={12} md={2} className='text-center mb-4'>
            <img
              src="https://www.starbucks.in/assets/icon/Food.webp"
              width={'80%'} height={'80%'}
              className='rounded-circle'
              alt="Food"
            />
            <p>Food</p>
          </Col>
          <Col sm={12} md={2} className='text-center mb-4'>
            <img
              src="https://www.starbucks.in/assets/icon/Merchandise.webp"
              width={'80%'} height={'80%'}
              className='rounded-circle'
              alt="Merchandise"
            />
            <p>Merchandise</p>
          </Col>
          <Col sm={12} md={2} className='text-center mb-4'>
            <img
              src="https://www.starbucks.in/assets/icon/CoffeeAtHome.webp"
              width={'80%'} height={'80%'}
              className='rounded-circle'
              alt="Coffee At Home"
            />
            <p>Coffee At Home</p>
          </Col>
          <Col sm={12} md={2} className='text-center mb-4'>
            <img
              src="https://www.starbucks.in/assets/icon/ReadyToEat.webp"
              width={'80%'} height={'80%'}
              className='rounded-circle'
              alt="Ready to Eat"
            />
            <p>Ready to Eat</p>
          </Col>
        </Row>
      </div>

      <div className="container mt-4">
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='fw-bold'>Barista Recommends</h3>
          <p className='text-decoration-none'>View Menu</p>
        </div>

        <Row className='mt-4'>
          <Col sm={12} md={4} className='mb-4'>
            <Card style={{ width: '100%' }}>
              <div className='d-flex p-3'>
                <Card.Img variant="top" src="https://www.starbucks.in/assets/icon/placeholder.webp"
                  style={{ width: '20%', height: '20%', borderRadius: '20%' }} />
                <div className='ms-3'>
                  <Card.Title>Cappuccino</Card.Title>
                </div>
              </div>
              <Card.Body className='d-flex'>
                <Card.Title>Rs309</Card.Title>
                <button className='btn btn-success ms-auto'>Add Item</button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} className='mb-4'>
            <Card style={{ width: '100%' }}>
              <div className='d-flex p-3'>
                <Card.Img variant="top" src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100447.webp"
                  style={{ width: '20%', height: '20%', borderRadius: '20%' }} />
                <div className='ms-3'>
                  <Card.Title>Signature Hot Chocolate</Card.Title>
                </div>
              </div>
              <Card.Body className='d-flex'>
                <Card.Title>Rs309</Card.Title>
                <button className='btn btn-success ms-auto'>Add Item</button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} className='mb-4'>
            <Card style={{ width: '100%' }}>
              <div className='d-flex p-3'>
                <Card.Img variant="top" src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/112573.webp"
                  style={{ width: '20%', height: '20%', borderRadius: '20%' }} />
                <div className='ms-3'>
                  <Card.Title>Vanilla Milkshake</Card.Title>
                </div>
              </div>
              <Card.Body className='d-flex'>
                <Card.Title>Rs309</Card.Title>
                <button className='btn btn-success ms-auto'>Add Item</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="container mt-4">
        <div className='d-flex justify-content-between align-items-center'>
          <h3>Learn more about the world of coffee!</h3>
          <p className='text-decoration-none'>Discover More</p>
        </div>
        <div className='mt-4'>
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgZHy0BEKUzMImGgXexjjyMLyfWeHsM_XCkEleAeNzzi29lAl0"
            alt="Learn More"
            width='100%' height={'400vh'}
            
          />
          <div className='text-light p-3' style={{marginTop:'-18%'}}>
          <p className='fs-3 fw-bold'>Art & Science of Coffee Brewing</p>
          <p>Master the Perfect Star with Starbucks! Learn the art and science of coffe Brewing</p>
          <button className='btn btn-light'>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondPage;
