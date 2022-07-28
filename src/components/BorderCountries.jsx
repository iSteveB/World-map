
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeContext'

const BorderCountries = ({ country }) => {

    const theme = useContext(ThemeContext);
    
    return (
        <div className={ theme === 'dark' ? 'border-countries' : 'border-countries' }>
            <span>Border Countries : </span>
            {country.map((country, ccn3) => {
                return (
                        country.borders
                            ? country.borders.map((borderCountry, index) => (
                                <Link to={`/${borderCountry}`} key={index}> { borderCountry } </Link>
                              ))
                            : ' None'
                );
            })}
        </div>
    );
};

export default BorderCountries;
