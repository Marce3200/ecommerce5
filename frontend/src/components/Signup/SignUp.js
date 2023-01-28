import "../LogIn/login.css";
import logo from "../img/logo.png";
import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../LogIn/Login";


const SignUp = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <center>
          <Col>
            <img className="logo-login" src={logo} />
            <p className="titulo-seccion">_Crea tu Cuenta</p>
            <div className="bajada-titulo">
              
                <div>
                  <p className="text-1">¿Ya tienes cuenta? </p>
                  <a href="/login" className="link">
                    {" "}
                    Inicia Sesión
                  </a>
                </div>
              
            </div>

            <Form className="form w-50">
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className="text-form">Nombre</Form.Label>
                <Form.Control type="text" size="sm"/>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className="text-form">Username</Form.Label>
                <Form.Control type="text" size="sm"/>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className="text-form">Email address</Form.Label>
                <Form.Control type="email" size="sm"/>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label className="text-form">Password</Form.Label>
                <Form.Control type="password" size="sm"/>
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label className="text-form">Confirma tu contraseña</Form.Label>
                <Form.Control type="password" size="sm"/>
              </Form.Group>

              <Button className="boton-registro" type="submit" size="sm">
                Crear Cuenta
              </Button>
            </Form>
          </Col>
        </center>
      </Row>
    </Container>
  )
}

export default SignUp