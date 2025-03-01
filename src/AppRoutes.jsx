import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import TestsPage from './pages/TestsPage.jsx';
import CountriesPage from './pages/Countriespage.jsx';
import UniversitiesPage from './pages/UniversitiesPage.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/universities" element={<UniversitiesPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes; 