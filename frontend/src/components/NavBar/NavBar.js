import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../NavBar/navbar.css";
import minilogo from "../img/minilogo.png";
import "../NavBar/navbar.css";
import { useState } from "react";
import { useAuth } from "../../services/AuthProvider";
import { logout } from "../../services/user.service";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    setAuth(false);

    navigate("/");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img className="mini-logo" src={minilogo} alt="minilogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Catálogo" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/catalogo">Teclados</NavDropdown.Item>
              <NavDropdown.Item href="/catalogo">Mouse</NavDropdown.Item>
              <NavDropdown.Item href="/catalogo">Cascos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/catalogo">Más Vendidos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {!auth ? <Nav.Link href="/login">Iniciar Sesión</Nav.Link> : null}
            {/* si NO hay algo en el token, que aparezca iniciar sesion */}
            {auth ? <Nav.Link href="/perfil">Mi Perfil</Nav.Link> : null}
            {/* si hay algo en el token, que aparezca mi perfil */}
            <Nav.Link eventKey={2} href="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Nav.Link>
            {auth ? <Nav.Link onClick= {onLogout}>Cerrar sesión</Nav.Link> : null}{" "}
            {/* si hay algo en el token, que aparezca cerrar sesion */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
