// src/components/shared/Breadcrumb.jsx
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const CustomBreadcrumb = ({ items }) => {
  return (
    <Breadcrumb>
      {items.map((item, index) => (
        <Breadcrumb.Item key={index} href={item.link}>
          {item.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;