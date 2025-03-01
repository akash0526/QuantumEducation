// src/pages/CountriesPage.jsx
import React from 'react';
import Header from '../components/common/Header/Header.jsx';
import Footer from '../components/common/Footer/Footer.jsx';
import SearchBar from '../components/common/SearchBar/SearchBar.jsx';

const CountriesPage = () => {
  const countries = [
    { name: 'USA', description: 'Study in the United States', image: '/images/countries/usa.jpg' },
    { name: 'Canada', description: 'Study in Canada', image: '/images/countries/canada.jpg' },
  ];

  return (
    <div>
      <Header />
      <main className="container my-5">
        <h1>Countries</h1>
        <SearchBar placeholder="Search countries..." onChange={(e) => console.log(e.target.value)} />
        <div className="d-flex flex-wrap gap-3">
          {countries.map((country, index) => (
            <ProgramCard key={index} title={country.name} description={country.description} image={country.image} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CountriesPage;