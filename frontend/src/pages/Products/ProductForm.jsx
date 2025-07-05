import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function ProductForm({ onSave, product = {} }) {
  const [name, setName] = useState(product.name || '');
  const [description, setDescription] = useState(product.description || '');

  useEffect(() => {
    setName(product.name || '');
    setDescription(product.description || '');
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group className="mb-3">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" required value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" required value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>
      <Button type="submit" variant="primary">
        {product._id ? 'Update' : 'Add'} Product
      </Button>
    </Form>
  );
}
