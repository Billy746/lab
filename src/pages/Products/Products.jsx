// src/pages/Products.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Products() {
  const sampleProducts = [
    { id: 1, name: 'Product A', description: 'A cool product' },
    { id: 2, name: 'Product B', description: 'Another great product' },
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-4">Products</h2>
      <Row>
        {sampleProducts.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Edit</Button>{' '}
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
