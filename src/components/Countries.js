import React, { useEffect, useState } from "react";
import axios from "axios";

import Cards from "./Cards";
import Filter from '../components/Filter';

const Countries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data))
    }, []);

    return (
    <div className="countries">
        < Filter data={data}/>

        <div className="cards">
            {data.map((country, index) => {
                return < Cards country={ country } key={ index }/>
            })};
        </div>
    </div>
    );
};

export default Countries;
