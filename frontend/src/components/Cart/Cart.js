import React from "react";
import Card from "react-bootstrap/Card";
import "../Cart/cart.css";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
const Cart = () => {
  return (
    <Container>
      <center>
        <Card
          className="card-carrito d-flex flex-column"
          style={{ width: "75%" }}
        >
          <Card.Body>
            <Row className="align-items-center">
              

              <Col lg={2}>
                <p>Kone XP Air</p>
              </Col>

              <Col lg={2}>
                <input
                  id="number"
                  type="number"
                  value="42"
                  className="w-50 input-number"
                />
              </Col>

              <Col lg={2}>
                <p className="texto-mini">$45.990</p>
              </Col>
              <Col lg={2}>
                <p className="texto-mini">X</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card
          className="card-carrito d-flex flex-column"
          style={{ width: "75%" }}
        >
          <Card.Body>
            <Row className="align-items-center">
             

              <Col lg={2}>
                <p>Kone XP Air</p>
              </Col>

              <Col lg={2}>
                <input
                  id="number"
                  type="number"
                  value="42"
                  className="w-50 input-number"
                />
              </Col>

              <Col lg={2}>
                <p className="texto-mini">$45.990</p>
              </Col>
              <Col lg={2}>
                <p className="texto-mini">X</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card
          className="card-carrito d-flex flex-column"
          style={{ width: "75%" }}
        >
          <Card.Body>
            <Row className="align-items-center">
              

              <Col lg={2}>
                <p>Kone XP Air</p>
              </Col>

              <Col lg={2}>
                <input
                  id="number"
                  type="number"
                  value="42"
                  className="w-50 input-number"
                />
              </Col>

              <Col lg={2}>
                <p className="texto-mini">$45.990</p>
              </Col>
              <Col lg={2}>
                <p className="texto-mini">X</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Button className="boton-comprar" type="submit" size="sm" a href='/checkout'>
                Proceder al pago
              </Button>
            
      </center>
      <Button size="sm" className="product-button" a href='/product'>
  comprar
</Button>
    </Container>

  );
};

export default Cart;
