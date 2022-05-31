import React from 'react';

const Filter = () => {
    return (
        <div className='filter'>
            <input type="search" placeholder='Search for a country'/>

            <select name="contient" id="contient" >
                <option value="">Filter by region</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Africa">Africa</option>
            </select>
        </div>
    );
};

export default Filter;