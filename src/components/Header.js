import React from 'react';
import './Header.css';
import { Link } from 'gatsby';
import Logo from '../links-and-images/logo.png';

const Header = () => {

    return (
        <div>
            <nav>
                <ul className = "right header_nav">
                    <li className = "header_nav__list">
                        <Link className = "header_nav__button" to="/">Home</Link>
                    </li>
                    <li className = "header_nav__list">
                        <Link className = "header_nav__button" to="/theGallery">Gallery</Link>
                    </li>
                    <li className = "header_nav__list">
                        <Link className = "header_nav__button" to="/about">About Me</Link>
                    </li>
                    <li className="header_nav__list mobile-nav__item--cta">
                        <Link className = "header_nav__button" to="/contact">Contact Us</Link>
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