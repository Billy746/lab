// src/components/Header.jsx
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          ProdManager
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" active={location.pathname === "/"}>Home</Nav.Link>
          <Nav.Link as={Link} to="/products" active={location.pathname === "/products"}>Products</Nav.Link>
          <Nav.Link as={Link} to="/contact" active={location.pathname === "/contact"}>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
