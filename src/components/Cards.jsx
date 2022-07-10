import { Link } from 'react-router-dom';

const Cards = ({ country }) => {

    return (
        <Link to={`/${country.ccn3}`} className="card" >
            
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