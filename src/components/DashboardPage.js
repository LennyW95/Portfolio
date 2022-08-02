import React from 'react';
import { Link } from 'react-router-dom';
import { PreviousWork } from './PreviousWork';
import { Testimonials } from './Testimonials';

const DashboardPage = () => (
    <div className="content-container">
        <div className='about-dashboard'>
            <h2>ABOUT ME</h2>
            <img alt="My Portrait" src="/images/portrait-me.jpg"></img>
            <p>Here is gonna be something about me. Eventualy when I get to it. Afret a lot of contemplation and all. Hey, I'm just drafting the page.</p>
            <div className='link--button'>
                <Link className='link--button__link' to="/about" >
                    <h1>More Info</h1>
                </Link>
            </div>
        </div>
        <div>
            <PreviousWork />
            <div className='link--button'>
                <Link className='link--button__link' to="/portfolio" >
                    <h1>More Info</h1>
                </Link>
            </div>
        </div>
        <div>
            <Testimonials />
            <div className='link--button'>
                <Link className='link--button__link' to="/portfolio" >
                    <h1>More Info</h1>
                </Link>
            </div>
        </div>
    </div>
);

export default DashboardPage;