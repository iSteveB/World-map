import { Link } from 'react-router-dom';

import { useContext } from 'react';
import {ThemeContext} from '../context/ThemeContext'

const Cards = ({ country }) => {

    const { theme } = useContext(ThemeContext);
    
    return (
        <Link to={`/${country.cca3}`} className={ theme === 'light' ? 'card' : 'card dark'} >
            
            <img src={ country.flags.png } alt={ country.name.common } />

            <div className="card-infos">

                <h3>{ country.name.common }</h3>
                <p> <span>Population:</span> { country.population.toLocaleString() }</p>
                <p> <span>Continent:</span> { country.region }</p>
                <p> <span>Capitale:</span> { country.capital ? country.capital : "None" }</p>
            </div>
        </Link>
    );
};

export default Cards;