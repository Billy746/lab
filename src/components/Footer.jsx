// src/components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-primary text-light py-3 mt-auto">
      <Container className="text-center">
        <small>&copy; {new Date().getFullYear()} ProdManager. Built for CSCI4177.</small>
      </Container>
    </footer>
  );
}
