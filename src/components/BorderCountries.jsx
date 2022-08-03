import { Link } from 'react-router-dom';

const BorderCountries = ({ country }) => {

    return (
        <div className='border-countries'>
            <span> Border Countries : </span>
            {country.map((country) => {
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
