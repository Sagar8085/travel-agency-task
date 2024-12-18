import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Carousel } from 'react-bootstrap';
import './Home.scss';  
import Dialog from '../../Components/Dialog/Dialog';

const Home = () => {
  const [showModal, setShowModal] = useState(false); 

  const handleClose = () => setShowModal(false); 
  const handleShow = () => setShowModal(true); 

  const cardImages = [
    "https://i.ytimg.com/vi/qzeBnKU0R8M/sddefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAlOasTVcxOPyXT9uvmA21NJOB9MaNvyAGhw&s",
    "https://travelyojana.in/wp-content/uploads/2024/09/Places-in-Goa-for-a-Family-Vacation-13.png"
  ];

  return (
    <div>
   
      <div className="hero-section">
        <Carousel interval={3000} controls indicators fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static2.tripoto.com/media/filter/tst/img/2025875/TripDocument/1601531054_these_traveling_tips_helps_me_having_hassle_free_journey.jpg"
              alt="Hero"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://st.depositphotos.com/1008939/1806/i/450/depositphotos_18062493-stock-photo-adventure.jpg"
              alt="Hero"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://etimg.etb2bimg.com/thumb/msid-93513013,imgsize-49652,width-1200,height-765,overlay-ettravel/tourism/experiential/august-travel-trends-here-is-how-indian-travellers-are-travelling-during-the-upcoming-long-weekends.jpg"
              alt="Hero"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Curated Tours Section */}
      <div className="curated-tours-section">
        <Container>
          <h2 className="my-4 text-center">Curated Tours</h2>
          <Row className="d-flex justify-content-center">
          
            <Col md={4} sm={6} className="mb-4">
              <Card>
                <Card.Img variant="top" src={cardImages[0]} className="card-image" />
                <Card.Body>
                  <Card.Title>XNights, YPax</Card.Title>
                  <Card.Text>
                    $299
                  </Card.Text>
                  <Button variant="primary" onClick={handleShow}>Book Now</Button>
                </Card.Body>
              </Card>
            </Col>

         
            <Col md={4} sm={6} className="mb-4">
              <Card>
                <Card.Img variant="top" src={cardImages[1]} className="card-image" /> 
                <Card.Body>
                  <Card.Title>XNights, YPax</Card.Title>
                  <Card.Text>
                    $299
                  </Card.Text>
                  <Button variant="primary" onClick={handleShow}>Book Now</Button>
                </Card.Body>
              </Card>
            </Col>

         
            <Col md={4} sm={6} className="mb-4">
              <Card>
                <Card.Img variant="top" src={cardImages[2]} className="card-image" /> 
                <Card.Body>
                  <Card.Title>XNights, YPax</Card.Title>
                  <Card.Text>
                    $299
                  </Card.Text>
                  <Button variant="primary" onClick={handleShow}>Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Dialog show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default Home;
