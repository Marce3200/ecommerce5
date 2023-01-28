import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import mouse1 from "../img/mouse1.jpg";
import casco1 from "../img/casco1.jpg";
import teclado1 from "../img/teclado1.jpg";
import microfono1 from "../img/microfono1.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import "../Catalogo/catalogo.css"
import banner from "../img/Banner.jpg"

const Catalogo = () => {
  return (
    <Container fluid>
    <center>
        <Row>
<<<<<<< HEAD
<<<<<<< HEAD
        <img src={banner}/>
        <p className='titulo-seccion pt-5 pb-5'>Los mejores</p>
=======
=======
        
>>>>>>> 1f39176 (cambios textos)
        <img src={banner} alt = ""/>
        <p className='titulo-seccion pt-5 pb-5'>Más Vendidos</p>
>>>>>>> b5e11c9 (comillas)
        </Row>
        <Row className='row-catalogo'>
          <Col sm={6} md={6} lg={3}>
            <Card className="card-catalogo" >
              <Card.Img variant="top" className="foto-catalogo" src={mouse1} />
              <Card.Body>
                <Card.Title className="card-tittle">Kone XP Air</Card.Title>
                <Card.Text className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <center>
                  <Button size="sm" className="product-button" a href='/product'>
                    Ver Producto
                  </Button>
                </center>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="card-catalogo" >
              <Card.Img variant="top" className="foto-catalogo" src={casco1} />
              <Card.Body>
                <Card.Title className="card-tittle">Syn Max Air</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <center>
                  <Button size="sm" className="product-button" a href='/product'>
                    Ver Producto
                  </Button>
                </center>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="card-catalogo" >
              <Card.Img
                variant="top"
                className="foto-catalogo"
                src={teclado1}
              />
              <Card.Body>
                <Card.Title className="card-tittle">Magma Mini</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <center>
                  <Button size="sm" className="product-button" a href='/product'>
                    Ver Producto
                  </Button>
                </center>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={6} lg={3}>
            <Card className="card-catalogo" >
              <Card.Img
                variant="top"
                className="foto-catalogo"
                src={microfono1}
              />
              <Card.Body>
                <Card.Title className="card-tittle">Torch</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <center>
                  <Button size="sm" className="product-button" a href='/product'>
                    Ver Producto
                  </Button>
                </center>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </center>
      </Container>
  )
}

export default Catalogo