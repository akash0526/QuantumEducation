// src/pages/TestsPage.jsx
import React from 'react';
import Header from '../components/common/Header/Header.jsx';
import Footer from '../components/common/Footer/Footer.jsx';
import ProgramCard from '../components/common/Card/Card.jsx';

const TestsPage = () => {
  const tests = [
    { title: 'GRE', description: 'Graduate Record Examination', image: '/images/tests/gre.jpg' },
    { title: 'IELTS', description: 'International English Language Testing System', image: '/images/tests/ielts.jpg' },
  ];

  return (
    <div>
      <Header />
      <main className="container my-5">
        <h1>Test Services</h1>
        <div className="d-flex flex-wrap gap-3">
          {tests.map((test, index) => (
            <ProgramCard key={index} title={test.title} description={test.description} image={test.image} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestsPage;