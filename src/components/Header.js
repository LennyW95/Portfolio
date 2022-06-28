import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__links" to="/services" >
                    <h1>Services</h1>
                </Link>
                <Link className="header__links" to="/portfolio" >
                    <h1>Portfolio</h1>
                </Link>
                <Link className="header__title" to="/" >
                    <h1>Home</h1>
                </Link>
                <Link className="header__links" to="/about" >
                    <h1>About Me</h1>
                </Link>
                <Link className="header__links" to="/contact" >
                    <h1>Contact Me</h1>
                </Link>
            </div>
        </div>
    </header>
);

export default Header;