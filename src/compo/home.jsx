import React, { useState, useEffect } from 'react';
import '../App';
import Header from './Header';
import Search from './searchHeader';
import Countries from './countries';
import { useLocation } from 'react-router-dom';



const Home = () => {
  const [data, setData] = useState([]);
  const [region, setRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;

    let filteredData = data;
    if (region !== 'all') {
      filteredData = filteredData.filter((item) => item.region === region);
    }
    if (searchTerm !== '') {
      filteredData = filteredData.filter((item) =>
        item.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredData(filteredData);
  }, [region, data, searchTerm, theme]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <Search setRegion={setRegion} setSearchTerm={setSearchTerm} />
      <Countries data={filteredData} />
    </div>
  );
};

export default Home;