import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = ({ match }) => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setCountry(data[0]);
        }
      });
  }, [countryName]);

  if (!country) {
    // Handle case when country is not found
    return <div>Loading.....</div>;
  }

  return (
    <div className="container">
      <div className="desc">
        <div className="flag">
          <img src={country.flags.svg} alt="Country image" />
        </div>
        <h5>
          <b>{country.name.common}</b>
        </h5>
        <div className="prop">
          <h6>Population: {country.population}</h6>
          <h6>Region: {country.region}</h6>
          <h6>Capital: {country.capital}</h6>
          <h6>Border Countries: {country.borders ? country.borders.join(' ') : ''}</h6>
          <h6>Top Level Domain: {country.tld}</h6>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
