import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const CardsDetails = () => {

    const { countryCcn3 } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://restcountries.com/v3.1/alpha/${countryCcn3}`)
            .then((response) => setData(response.data));
    }, [countryCcn3]);


    return (
        <div className='cards-details'>
            {data.map(country => {
                return <p key={countryCcn3}>{country.name.common}</p>
            })}
        </div>
    );
};

export default CardsDetails;
