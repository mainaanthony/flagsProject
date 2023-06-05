import React, { useState } from 'react';

const Search = ({ setRegion, setSearchTerm }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search for a country"
        value={searchValue}
        onChange={handleChange}
      />
      <select onChange={(e) => setRegion(e.target.value)}>
        <option value="all">Filter By Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Search;
