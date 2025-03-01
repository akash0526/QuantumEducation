// src/components/common/Button.jsx
import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ children, onClick, variant = 'primary', className = '' }) => {
  return (
    <Button variant={variant} onClick={onClick} className={className}>
      {children}
    </Button>
  );
};

export default CustomButton;