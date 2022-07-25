
import React from 'react';
import { Link } from 'react-router-dom';

const BorderCountries = ({ country }) => {

    return (
        <div>
            <span>Borders Countries : </span>
            {country.map((country, ccn3) => {
                return (
                    <div className='border-countries' key={ccn3}>
                        {country.borders
                            ? country.borders.map((borderCountry, index) => (
                                <Link to={`/${borderCountry}`} key={index}>
                                      {borderCountry}
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
