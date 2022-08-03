import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

import moon from '../assets/images/moon.svg';
import sun from '../assets/images/sun.svg';

const Header = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <header className={theme === 'light' ? null : 'dark-mode'}>
            <div className='text'>
                <Link to="/"><h1>Where in the world?</h1></Link>
                <button onClick={toggleTheme}>
                    <img src={theme === 'light' ? moon : sun} alt='Theme icon' />
                    <p> {theme === 'light' ? 'Dark Mode' : 'Light Mode'}</p>
                </button>
            </div>
        </header>
    );
};

export default Header;
