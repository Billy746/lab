import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container className="py-5">
      <h2>Contact Us</h2>
      <div>
        <p>
          Address: 123 React Street, UI City, CA 90210
        </p>
        <p>
          Email: hello@prodmanage.com
        </p>
        <p>
          Phone: +1 (555) 123-4567
        </p>
      </div>

    </Container>
  );
}