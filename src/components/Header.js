import React from 'react';
import logo from '../images/name_and_logo.png';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} alt="Guidara Glass Designs logo" className="logo" />
        </header>
    );
};

export default Header;