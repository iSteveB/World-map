import React, { useState } from 'react';
import {} from '../assets/images/glass.svg'

const Filter = ({ data }) => {

    const [selectedContinent, setSelectedContinent] = useState("");
    const continents = ["Americas", "Asia", "Europe", "Oceania", "Africa", "Antartic"]

    return (
        <div className='filter'>
            <input type="search" placeholder="Search for a country..."/>

            <select name="contient" id="contient" onChange={(e) => setSelectedContinent(e.target.value)} >
                <option value=""> -- Filter by region --</option>
                {continents.map(continent => {
                       return <option value={continent} key={continent}>{continent}</option>
                })}
            </select>
        </div>
    );
};

export default Filter;