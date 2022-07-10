import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CardsDetails = () => {
    const { countryCcn3 } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://restcountries.com/v3.1/alpha/${countryCcn3}`)
            .then((response) => setData(response.data));
    }, [countryCcn3]);

    return (
        <div className='cards-details'>
            <button onClick={() => navigate(-1)}>Back</button>
            {data.map((country) => {
                return (
                    <div key={countryCcn3}>
                        <div className='flag-details'>
                            <img
                                src={country.flags.png}
                                alt={country.name.common}
                            />
                        </div>

                        <div className=''>
                            <h1>{country.name.common}</h1>
                            <div className='details'>
                                <div className='infos-1'>
                                    <p>Native Name : {country.name.official}</p>
                                    <p>Population : {country.population.toLocaleString()}</p>
                                    <p>Region : {country.region}</p>
                                    <p>Sub Region : {country.subregion}</p>
                                    <p>Capital : {country.capital}</p>
                                </div>
                                <div className="infos-2">
                                    <p>Top Level Domain : {country.tld[0]}</p>
                                    <p>Currency : {country.currencies.name}</p>
                                </div>
                            </div>
                            <div className='border-countries'></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardsDetails;
