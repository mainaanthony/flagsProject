import './App.css';
import React from 'react';
import Countries from './compo/countries.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './compo/home.jsx';
import CountryDetails from './compo/countryDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:countryName" element={<CountryDetails  />} />
      </Routes>
    </Router>
  );
};

export default App;