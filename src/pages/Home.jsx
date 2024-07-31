import React from 'react';
import './Home.css';
import { Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <>
      <div className="container-fluid mt-3 home-container p-5">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-white mb-0">Starbucks</p>
          <button className="btn btn-outline-light">Know More</button>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <Row className="justify-content-center">
          <Col md={6} className="custom p-4 d-flex flex-column ">
            <img 
              src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Dashboard_banner_side_image1_2_60b8699215.png"
              width="50px"
             
              className="mt-3"
              alt="Starbucks"
            />
          
           <p className="ms-5" >New Updates</p>
            <p className=" ms-5 mb-3">Starbucks Rewards</p>
            <p className='ms-5'>Collect stars any way you pay. Rewards got a makeover, no surprises just perks!</p>
           <div className="ms-auto">
              <button className='btn btn-outline-success mt-3'>Know More</button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
