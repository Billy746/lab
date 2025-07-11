import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-3 fw-bold mb-4 text-primary">Welcome to ProdManage</h1>
          <p className="lead mb-4 text-muted">Effortlessly manage your products with our all-in-one tool. Create, view, edit, and delete products — fast, simple, and reliable.</p>
          <Button as={Link} to="/products" size="lg" variant="success">Explore Products</Button>
        </Col>
      </Row>
    </Container>
  );
}