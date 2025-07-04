// src/pages/Contact.jsx
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container className="py-5">
      <h2>Contact Us</h2>
      <Form className="mt-4" style={{ maxWidth: '500px' }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="your@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
}
