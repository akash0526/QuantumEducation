// src/components/common/SearchBar.jsx
import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <Button variant="outline-secondary">Search</Button>
    </InputGroup>
  );
};

export default SearchBar;