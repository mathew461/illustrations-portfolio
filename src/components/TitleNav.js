import React from 'react';
import { Link } from 'gatsby';
import './TitleNav.css';
import SketchArtist from '../links-and-images/Welcome_Page_Artist.png';

const TitleNav = () => {

    return (
        <div>
            <div className="flex-center-vertically">
                <p className="WelcomeTitle">Welcome</p>
                <nav className="WelcomeNav">
                    <ul className="WelcomeNav_ul">
                        <li className="WelcomeNav_li">
                            <Link className="" to="/">Home</Link>
                        </li>
                        <li className="WelcomeNav_li">
                            <Link to="/theGallery">Gallery</Link>
                        </li>
                        <li className="WelcomeNav_li">
                            <Link to="/about">About Me</Link>
                        </li>
                        <li className="WelcomeNav_li">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <img src={SketchArtist} className="WelcomeImage"/>
        </div>
    )
};

export default TitleNav;