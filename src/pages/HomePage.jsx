// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/common/Header/Header.jsx';
import Footer from '../components/common/Footer/Footer.jsx';
import HeroBanner from '../components/shared/HeroBanner/HeroBanner.jsx';
import TestimonialCarousel from '../components/shared/Testimonial/Testimonial.jsx';

const HomePage = () => {
  const testimonials = [
    { name: 'John Doe', review: 'EduConsult helped me get into my dream university!', image: '/images/testimonials/1.jpg' },
    { name: 'Jane Smith', review: 'Great support and guidance throughout the process.', image: '/images/testimonials/2.jpg' },
  ];

  return (
    <div>
      <Header />
      <HeroBanner
        title="Welcome to EduConsult"
        subtitle="Your gateway to global education"
        buttonText="Explore Universities"
        buttonLink="/universities"
      />
      <TestimonialCarousel testimonials={testimonials} />
      <Footer />
    </div>
  );
};

export default HomePage;