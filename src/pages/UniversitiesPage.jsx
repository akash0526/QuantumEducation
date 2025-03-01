// src/pages/UniversitiesPage.jsx
import React from 'react';
import Header from '../components/common/Header/Header.jsx';
import Footer from '../components/common/Footer/Footer.jsx';
import Filter from '../components/shared/Filter/Filter.jsx';

const UniversitiesPage = () => {
  const universities = [
    { name: 'Harvard University', description: 'Top university in the USA', image: '/images/universities/harvard.jpg' },
    { name: 'University of Toronto', description: 'Top university in Canada', image: '/images/universities/toronto.jpg' },
  ];

  const filterOptions = [
    { value: 'usa', label: 'USA' },
    { value: 'canada', label: 'Canada' },
  ];

  return (
    <div>
      <Header />
      <main className="container my-5">
        <h1>Universities</h1>
        <Filter options={filterOptions} onChange={(e) => console.log(e.target.value)} />
        <div className="d-flex flex-wrap gap-3">
          {universities.map((university, index) => (
            <ProgramCard key={index} title={university.name} description={university.description} image={university.image} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UniversitiesPage;