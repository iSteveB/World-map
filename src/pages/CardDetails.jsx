import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

import axios from 'axios';

import BorderCountries from '../components/BorderCountries';

import arrow from '../assets/images/arrow.svg';
import arrowDark from '../assets/images/arrow-dark.svg';

const CardDetails = () => {
    const { countryCca3 } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        axios
            .get(`https://restcountries.com/v3.1/alpha/${countryCca3}`)
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }, [countryCca3]);

    return (
        <div
            className={
                theme === 'light' ? 'card-details' : 'card-details dark'
            }>
            <button className='button-back' onClick={() => navigate(-1)}>
                <img src={theme === 'light' ? arrow : arrowDark} alt='back-button'/>
                Back
            </button>

            {data.map((country) => {
                return (
                    <div key={countryCca3} className='details'>
                        <div className='flag-details'>
                            <img
                                src={country.flags.svg}
                                alt={country.name.common}
                            />
                        </div>

                        <div className='country-details'>

                            <h1>{country.name.common}</h1>
                            
                            <div className='country-infos'>
                                <div>
                                    <p>
                                        <span>Native Name : </span>
                                        {Object.values(country.name.nativeName)
                                            .map((name) => name.common)
                                            .join(', ')}
                                    </p>
                                    <p>
                                        <span>Population : </span>
                                        {country.population.toLocaleString()}
                                    </p>
                                    <p>
                                        <span>Region : </span>
                                        {country.region}
                                    </p>
                                    <p>
                                        <span>Sub Region : </span>
                                        {country.subregion
                                            ? country.subregion
                                            : 'None'}
                                    </p>
                                    <p>
                                        <span>Capital : </span>
                                        {country.capital
                                            ? country.capital
                                            : ' None '}
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        <span>Top Level Domain : </span>
                                        {country.tld[0]}
                                    </p>
                                    <p>
                                        <span>Currency : </span>
                                        {country.currencies
                                            ? ` ${Object.values(
                                                  country.currencies
                                              ).map(
                                                  (currency) => currency.name
                                              )}`
                                            : 'None'}
                                    </p>
                                    <p>
                                        <span>Languages : </span>{' '}
                                        {` ${Object.values(country.languages)
                                            .map((language) => language)
                                            .reverse()
                                            .join(', ')}`}
                                    </p>
                                </div>
                            </div>
                            <BorderCountries country={data} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardDetails;
