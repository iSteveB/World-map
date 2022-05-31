import React from 'react';
import Countries from '../components/Countries';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            < Header />
            < Filter />
            < Countries />
            < Footer />
        </div>
    );
};

export default Home;