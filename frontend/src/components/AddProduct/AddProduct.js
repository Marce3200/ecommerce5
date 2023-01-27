import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import "../AddProduct/addproduct.css";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import logo from "../img/logo.png"

const AddProduct = () => {
  return (
    <Container fluid>
      <Row>
        <center>
        <Col>
<img className="logo-login" src={logo} />
<form className='w-50'>
<Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control   />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control   />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Stock</Form.Label>
        <Form.Control   />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Control   />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control   />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>URL imagen</Form.Label>
        <Form.Control   />
      </Form.Group>
      </form>
      
      </Col>
      </center>

      </Row>
    </Container>
  )
}

export default AddProduct