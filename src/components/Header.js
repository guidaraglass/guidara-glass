import React from 'react';
import logo from '../images/name_and_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { config } from '../config';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} alt="Guidara Glass Designs logo" className="logo" />
            <div className="contact-links">
                <a href="mailto:kim.does.glass@gmail.com" className="App-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href={`https://instagram.com/${config.instagramHandle}`} className="App-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </header>
    );
};

export default Header;