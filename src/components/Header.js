import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <div className='nav__home-button'>
                    <NavLink className="header__links" exact activeClassName="is-active" to="/">
                        <h1>HOME</h1>
                    </NavLink>
                </div>
                <div className='nav__nav-links'>
                    <NavLink className="header__links" activeClassName="is-active" to="/services" >
                        <h1>SERVICES</h1>
                    </NavLink>
                    <NavLink className="header__links" activeClassName="is-active" to="/portfolio" >
                        <h1>PORTFOLIO</h1>
                    </NavLink>

                    <NavLink className="header__links" activeClassName="is-active" to="/about" >
                        <h1>ABOUT</h1>
                    </NavLink>
                    <NavLink className="header__links" activeClassName="is-active" to="/contact" >
                        <h1>CONTACT</h1>
                    </NavLink>
                </div>

            </div>
        </div>
    </header>
);

export default Header;