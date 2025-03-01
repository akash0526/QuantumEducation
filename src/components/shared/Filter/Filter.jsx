// src/components/shared/Filter.jsx
import React from 'react';
import { Form } from 'react-bootstrap';

const Filter = ({ options, onChange }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Filter by:</Form.Label>
        <Form.Control as="select" onChange={onChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default Filter;