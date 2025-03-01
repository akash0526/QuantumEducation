// src/components/shared/Testimonials.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <Carousel>
      {testimonials.map((testimonial, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={testimonial.image}
            alt={`Testimonial ${index + 1}`}
          />
          <Carousel.Caption>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.review}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
