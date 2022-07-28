import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

import axios from 'axios';

import Card from '../components/Card';

import search from '../assets/images/search.svg';
import searchDark from '../assets/images/search-dark.svg';
import chevron from '../assets/images/chevron.svg';
import chevronDark from '../assets/images/chevron-dark.svg';


const Countries = () => {
    const [data, setData] = useState([]);
    const [searchCountry, setSearchCountry] = useState('');
    const [selectedContinent, setSelectedContinent] = useState('');

    const { theme } = useContext(ThemeContext);

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
                <div className='input'>
                    <input
                        type='search'
                        placeholder='Search for a country...'
                        onChange={(e) => setSearchCountry(e.target.value)}
                        className={theme === 'light' ? null : 'dark'}
                    />
                    <img
                        src={theme === 'light' ? search : searchDark}
                        alt='search'
                    />
                </div>

                <div className='select'>
                    <select
                        name='continent'
                        onChange={(e) => setSelectedContinent(e.target.value)}
                        className={theme === 'light' ? null : 'dark'}>
                        <option value=''>Filter by region</option>
                        {continents.map((continent) => {
                            return (
                                <option value={continent} key={continent}>
                                    {continent}
                                </option>
                            );
                        })}
                    </select>
                    <img
                        src={theme === 'light' ? chevron : chevronDark}
                        alt='chevron'
                    />
                </div>
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
                        return <Card country={country} key={index} />;
                    })}
            </div>
        </div>
    );
};

export default Countries;
