import React from 'react';
import { Link } from 'react-router-dom';

const Countries = ({ data }) => {
  return (
    <div className="container">
      {data.map((item) => (
        <div key={item.name.common} className="desc">
          <Link key={item.id} to={`/countries/${item.name.common}`}>
            <div className="flag">
              <img src={item.flags.svg} alt="Country image" />
            </div>
            <h5>
              <b>{item.name.common}</b>
            </h5>
            <div className="prop">
              <h6>Population: {item.population}</h6>
              <h6>Region: {item.region}</h6>
              <h6>Capital: {item.capital}</h6>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Countries;
