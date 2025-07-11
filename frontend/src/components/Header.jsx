import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export default function Header() {
  const location = useLocation();
  const { token, logout } = useAuth();

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">ProdManager</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" active={location.pathname === "/"}>Home</Nav.Link>
          <Nav.Link as={Link} to="/products" active={location.pathname === "/products"}>Products</Nav.Link>
          <Nav.Link as={Link} to="/contact" active={location.pathname === "/contact"}>Contact</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          {token ? (
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}