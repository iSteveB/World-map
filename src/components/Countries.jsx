import { useEffect, useState } from 'react';
import axios from 'axios';

import Cards from './Cards';


const Countries = () => {
    const [data, setData] = useState([]);
    const [searchCountry, setSearchCountry] = useState('');
    const [selectedContinent, setSelectedContinent] = useState('');

    const continents = [
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
        'Africa',
        'Antartic',
    ];

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className='countries'>
            <div className='filter'>
                <input
                    type='search'
                    placeholder='Search for a country...'
                    onChange={(e) => setSearchCountry(e.target.value)}
                />

                <select
                    name='continent'
                    onChange={(e) => setSelectedContinent(e.target.value)}>
                    <option value=''>Filter by region</option>
                    {continents.map((continent) => {
                        return (
                            <option value={continent} key={continent}>
                                {continent}
                            </option>
                        );
                    })}
                </select>
            </div>

            <div className='cards'>
                {data
                    .filter((country) => {
                        return country.translations.fra.common
                            .toLowerCase()
                            .includes(searchCountry.toLowerCase());
                    })
                    .filter((country) => {
                        return country.region
                            .toLowerCase()
                            .includes(selectedContinent.toLowerCase());
                    })
                    .sort((a, b) => b.population - a.population)
                    .map((country, index) => {
                        return <Cards country={country} key={index} />;
                    })}
                ;
            </div>
        </div>
    );
};

export default Countries;
