import React from "react";
import "./home.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../img/logo.png";
import mouse1 from "../img/mouse1.jpg"
import casco1 from "../img/casco1.jpg"
import teclado1 from "../img/teclado1.jpg"



const Home = () => {
  return (
    <Container fluid className="p-0">
      <Row className="logosection">
      <center>
        <Col>
        <img className="logo" src={logo} />
        <div className="boxed">
          <p className="bajada-header">
            
            Arma tu Set Up, con los mejores accesorios tecnológicos y el mejor servicio.
          </p>
          </div>
          
        </Col>
        </center>
        </Row>
        <center>
<Row>
  
  <Col sm={12} md={4} lg={4}>
  <Card className="card-catalogo" style={{ width: '18rem' }}>
      <Card.Img variant="top"  className="foto-catalogo" src={mouse1} />
      <Card.Body>
        <Card.Title className="card-tittle" >Kone XP Air</Card.Title>
        <Card.Text className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <center>
        <Button size="sm" className="product-button">Ver Producto</Button>
        </center>
      </Card.Body>
    </Card>
</Col>
<Col sm={12} md={4} lg={4}>
    <Card className="card-catalogo" style={{ width: '18rem' }}>
      <Card.Img variant="top" className="foto-catalogo" src={casco1}/>
      <Card.Body>
        <Card.Title className="card-tittle">Syn Max Air</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <center>
        <Button size="sm" className="product-button">Ver Producto</Button>
        </center>
      </Card.Body>
    </Card>
    </Col>
    <Col sm={12} md={4} lg={4}>
    <Card className="card-catalogo" style={{ width: '18rem' }}>
      <Card.Img variant="top" className="foto-catalogo" src={teclado1} />
      <Card.Body>
        <Card.Title className="card-tittle">Magma Mini</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <center>
        <Button size="sm" className="product-button">Ver Producto</Button>
        </center>
      </Card.Body>
    </Card>
  </Col>
  
  </Row>
  </center>
    </Container>
  );
};

export default Home