// src/pages/Home.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container className="py-5 text-center">
      <h1 className="display-4 fw-bold mb-4">Welcome to ProdManager</h1>
      <p className="lead mb-5">
        Manage your products efficiently with our full-featured product management tool.
      </p>
      <Button as={Link} to="/products" variant="success" size="lg">
        View Products
      </Button>
    </Container>
  );
}
