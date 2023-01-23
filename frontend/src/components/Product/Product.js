import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import "../Product/product.css"
import teclado1 from "../img/teclado1.jpg"
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'

const Product = () => {
  return (
    <Container fluid>
      <center>
      <Row>
        
        <Col lg={6} sm={12}>
        <img src={teclado1} className="imagen-principal"/>
      
        </Col>
        <Col lg={6} sm={12}>
          
          <p className='text-infor-product'>Magma Mini</p>
          
            <li>Mini 60% form factor frees up space on your desktop</li>
            <li>5-Zone AIMO RGB Lighting with translucent top plate</li>
            <li>Durable IP33 rating protects from accidental spills</li>
            <li>Quiet, fast, and responsive membrane keys</li>
            <li>Easy-Shift[+] button duplicator enables function layers</li>
            <li>Left side mounted cable</li>

            <p className='precio'>$145.000</p>

            <Button className="boton-comprar" type="submit" size="sm">
                Agregar al Carrito
              </Button>
          
        </Col>
        
      </Row>
      </center>
    </Container>
  )
}

export default Product