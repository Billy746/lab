import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-3 fw-bold mb-4 text-primary">Welcome to ProdManager</h1>
          <p className="lead mb-4 text-muted">Manage your products effectively with our MERN stack tool.</p>
          <Button as={Link} to="/products" size="lg" variant="success">View Products</Button>
        </Col>
      </Row>
    </Container>
  );
}