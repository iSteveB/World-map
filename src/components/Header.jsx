import React from 'react';
import lightMoon from '../assets/images/moon-dark.svg';
import darkMoon from '../assets/images/moon-light.svg';

const Header = () => {
    return (
        <div className='header'>
            <div className='text'>
                <h1>Where in the world?</h1>
                <button>
                    <img src={darkMoon} alt='Dark moon icon' />
                    <p> Dark Mode</p>
                </button>
            </div>
        </div>
    );
};

export default Header;
