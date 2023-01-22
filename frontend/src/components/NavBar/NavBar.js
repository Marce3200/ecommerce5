import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../NavBar/navbar.css"

import minilogo from "../img/minilogo.png"
import "../NavBar/navbar.css"

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/"><img className="mini-logo" src={minilogo}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         
          <NavDropdown  title="Catálogo" id="collasible-nav-dropdown">
            <NavDropdown.Item  href="#action/3.1">Teclados</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Mouse
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cascos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Más Vendidos
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
          <Nav.Link eventKey={2} href="/cart">
            Carrito
          </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar