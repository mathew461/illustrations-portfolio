import React from 'react';
import './Header.css';
import Logo from '../links-and-images/logo.png';


const Header = () => {

    return (
        <div>
            <nav>
                <ul className = "right header_nav">
                    <li className = "header_nav__list">
                        <a className = "header_nav__button" href="/index.js">Gallery</a>
                    </li>
                    <li className = "header_nav__list">
                        <a className = "header_nav__button" href="/about.js">About Me</a>
                    </li>
                    <li className="header_nav__list mobile-nav__item--cta">
                        <a className = "header_nav__button" href="/contact.html">Contact Us</a>
                    </li>
                </ul>
            </nav>
  
            <button className="toggle-button">
                <span className="toggle-button__bar"></span>
                <span className="toggle-button__bar"></span>
                <span className="toggle-button__bar"></span>
            </button>		
            <img src={Logo} alt="Mathew Wrigleys Portfolio" className="logo" />	
        </div>
    )
};


export default Header;