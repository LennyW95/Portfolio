import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__links" to="/services" >
                    <h1>SERVICES</h1>
                </Link>
                <Link className="header__links" to="/portfolio" >
                    <h1>PORTFOLIO</h1>
                </Link>

                <Link className="header__links" to="/about" >
                    <h1>ABOUT</h1>
                </Link>
                <Link className="header__links" to="/contact" >
                    <h1>CONTACT</h1>
                </Link>
            </div>
        </div>
    </header>
);

export default Header;