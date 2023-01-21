import React from "react";
import "./home.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../img/logo.png"



const Home = () => {
  return (
    <Container fluid className="  p-0">
      <Row className="logosection ">
      <center>
        <Col className="text-center">
        <img className="logo" src={logo} />
          <p className="bajada-header">
            {" "}
            _Future is Nerdy
          </p>
         
 
          
        </Col>
        </center>
      </Row>
    </Container>
  )
}

export default Home