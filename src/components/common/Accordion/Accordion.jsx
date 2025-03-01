// src/components/common/Accordion.jsx
import React from 'react';
import { Accordion } from 'react-bootstrap';

const CustomAccordion = ({ items }) => {
  return (
    <Accordion>
      {items.map((item, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>{item.content}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;