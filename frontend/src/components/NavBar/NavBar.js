import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../NavBar/navbar.css"
import { readToken } from"../../services/user.service";
import minilogo from "../img/minilogo.png"
import "../NavBar/navbar.css"
import { useState } from 'react';
import { useAuth } from '../../services/AuthProvider';



const NavBar = () => {
const {auth} = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/"><img className="mini-logo" src={minilogo} alt= "minilogo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         
          <NavDropdown  title="Catálogo" id="collasible-nav-dropdown">
            <NavDropdown.Item  href="/catalogo">Teclados</NavDropdown.Item>
            <NavDropdown.Item href="/catalogo">
              Mouse
            </NavDropdown.Item>
            <NavDropdown.Item href="/catalogo">Cascos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/catalogo">
              Más Vendidos
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          {!auth?<Nav.Link href="/login">Iniciar Sesión</Nav.Link>:null}{/* si NO hay algo en el token, que aparezca iniciar sesion */}
          {auth?<Nav.Link href="/perfil">Mi Perfil</Nav.Link>:null}{/* si hay algo en el token, que aparezca mi perfil */}
          
          <Nav.Link eventKey={2} href="/cart">
            Carrito
          </Nav.Link>
          
          {auth?<Nav.Link href="/logout">Cerrar sesión</Nav.Link>:null} {/* si hay algo en el token, que aparezca cerrar sesion */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar