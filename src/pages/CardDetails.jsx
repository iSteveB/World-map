import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import BorderCountries from "../components/BorderCountries"

const CardDetails = () => {
    const { countryCca3 } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://restcountries.com/v3.1/alpha/${countryCca3}`)
            .then((response) => setData(response.data))
            .catch((err) => console.log(err));
    }, [countryCca3]);

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>

            {data.map((country) => {
                return (
                    <div key={countryCca3} className='card-details'>
                        <div className='flag-details'>
                            <img
                                src={country.flags.png}
                                alt={country.name.common}
                            />
                        </div>

                        <div className='country-details'>
                            <h1>{country.name.common}</h1>
                            <div className='details'>
                                <div>
                                    <p>
                                        <span>Native Name : </span>{' '}
                                        {Object.values(country.name.nativeName)
                                            .map((name) => name.common)
                                            .join(', ')}
                                    </p>
                                    <p>
                                        <span>Population : </span>{' '}
                                        {country.population.toLocaleString()}
                                    </p>
                                    <p>
                                        <span>Region : </span>
                                        {country.region}
                                    </p>
                                    <p>
                                        <span>Sub Region : </span>
                                        {country.subregion ? country.subregion : "None"}
                                    </p>
                                    <p>
                                        <span>Capital : </span>
                                        {country.capital ? country.capital : " None "}
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        <span>Top Level Domain : </span>
                                        {country.tld[0]}
                                    </p>
                                    <p>
                                        <span>Currency : </span>
                                        {country.currencies ? ` ${Object.values(
                                            country.currencies
                                        ).map((currency) => currency.name)}` : 'None'}
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
                            
                            <div className='border-countries'>

                                <BorderCountries country={data}/>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardDetails;
