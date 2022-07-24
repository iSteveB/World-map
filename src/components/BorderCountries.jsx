import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const BorderCountries = ({ country }) => {

    
    const lesPaysVoisins = [];

    const getBorderCountriesName = (borderCountry) => {
        axios
            .get(`https://restcountries.com/v3.1/alpha/${borderCountry}`)
            .then((res) =>
                res.data.map((country) => {
                     lesPaysVoisins.push(country.name.common);
                })
            );
    };

    console.log(lesPaysVoisins);

    return (
        <div>
            <span>Borders Countries : </span>
            {country.map((country, ccn3) => {
                return (
                    <div className='border-countries' key={ccn3}>
                        {country.borders
                            ? country.borders.map((borderCountry, index) => (
                                <Link to={`/${borderCountry}`} key={index}>
                                      {getBorderCountriesName(borderCountry)}{lesPaysVoisins.toString()}
                                  </Link>
                              ))
                            : 'None'}
                    </div>
                );
            })}
        </div>
    );
};

export default BorderCountries;
