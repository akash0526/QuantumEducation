// src/pages/AboutPage.jsx
import React from 'react';
import Header from '../components/common/Header/Header.jsx';
import Footer from '../components/common/Footer/Footer.jsx';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main className="container my-5">
        <h1>About Us</h1>
        <p>We are a leading educational consultancy helping students achieve their dreams.</p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;