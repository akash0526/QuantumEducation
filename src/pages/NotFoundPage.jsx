// src/pages/NotFoundPage.jsx
import React from 'react';
import Header from '../components/common/Header/Header.jsx';
import Footer from '../components/common/Footer/Footer.jsx';

const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <main className="container my-5">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;