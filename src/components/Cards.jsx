import React from 'react';

const Cards = ({ country }) => {

    return (
        <div className="card">
            <img src={ country.flags.png } alt={ country.translations.fra.common } />
            <div className="card-infos">
                <h3>{ country.translations.fra.common }</h3>
                <p> <span>Population:</span> { country.population.toLocaleString() }</p>
                <p> <span>Continent:</span> { country.region }</p>
                <p> <span>Capitale:</span> { country.capital ? country.capital : "None" }</p>
            </div>
        </div>
    );
};

export default Cards;