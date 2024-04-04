import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Health Care</Navbar.Brand>
          <Nav className="ms">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Share</Nav.Link>
            <Nav.Link href="#pricing">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='img'></div>

      <div className='services'>
        <h3>Our Services</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta rerum eum cupiditate et quidem voluptatum, cum veniam officia, dolorem eveniet natus, laudantium dicta provident. Reiciendis omnis doloribus quasi veniam soluta.</p>
      </div>


      <div className='head'>

<div className='hallimage'>
  
</div>
        <Container>
          <Row>
            <Col lg={4}>
              <Card style={{ width: '18rem' }}   >
                <Card.Img variant="top" src="src/image/search image icon2.png" />
                <Card.Body>
                  <Card.Title>Search Doctor</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>


            <Col lg={4}>
              <Card style={{ width: '18rem' }}   >
                <Card.Img variant="top" src="src/image/online pharmacy.jpg" />
                <Card.Body>
                  <Card.Title>Online Pharmacy</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>


            <Col lg={4}>
              <Card style={{ width: '18rem' }}   >
                <Card.Img variant="top" src="src/image/consultation.jpg" />
                <Card.Body>
                  <Card.Title>Consultation</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>



          <Row>
            <Col lg={4}>
              <Card style={{ width: '18rem' }}   >
                <Card.Img variant="top" src="src/image/details info.jpg" />
                <Card.Body>
                  <Card.Title>Details Info</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>


            <Col lg={4}>
              <Card style={{ width: '18rem' }}   >
                <Card.Img variant="top" src="src/image/Emergency care.jpg" />
                <Card.Body>
                  <Card.Title>Emergency care</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>


            <Col lg={4}>
              <Card style={{ width: '18rem' }}   >
                <Card.Img variant="top" src="src/image/traking.png" />
                <Card.Body>
                  <Card.Title>Tracking</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>

        <Button variant="primary">Read More</Button>


      </div>





    </>
  );
}

export default ColorSchemesExample;
