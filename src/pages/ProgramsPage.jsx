// src/pages/ProgramsPage.jsx
import React from 'react';
import Header from '../components/common/Header/Header.jsx';
import Footer from '../components/common/Footer/Footer.jsx';

const ProgramsPage = () => {
  const programs = [
    { title: 'Computer Science', description: 'Bachelor of Science in Computer Science', image: '/images/programs/cs.jpg' },
    { title: 'Business Administration', description: 'Master of Business Administration', image: '/images/programs/mba.jpg' },
  ];

  return (
    <div>
      <Header />
      <main className="container my-5">
        <h1>Programs</h1>
        <div className="d-flex flex-wrap gap-3">
          {programs.map((program, index) => (
            <ProgramCard key={index} title={program.title} description={program.description} image={program.image} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;