import axios from "axios";
import React, { useEffect, useState } from "react";

const Countries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);

    return (
    <div className="countries">
        {data.map((country, index)=>{
           return <p key={index}>{country.name.common}</p>;
        })}
    </div>
    );
};

export default Countries;
