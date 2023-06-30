import React from 'react';
import { Link } from 'react-router-dom';
import { PreviousWork } from './PreviousWork';
import { Testimonials } from './Testimonials';
import { BackgroundImage } from './BackgroundImage';

let props = {
    imageUrl: '/images/dashboard.png',
    header: "Dashboard Page"
}

const DashboardPage = () => (
    <div>
        <BackgroundImage {...props} />
        <div className="content-container">
            <div className='about-dashboard'>
                <div className='about-dashboard-content'>
                    <h2>ABOUT ME</h2>
                    <img alt="My Portrait" src="/images/portrait-me.jpg"></img>
                    <p>Here is gonna be something about me. Eventualy when I get to it. After a lot of contemplation and all. Hey, I'm just drafting the page.</p>
                </div>
                <div className='link--button'>
                    <Link className='link--button__link' to="/about" >
                        <p>More Info</p>
                    </Link>
                </div>
            </div>
            <div className='previous-work'>
                <PreviousWork />
                <div className='link--button'>
                    <Link className='link--button__link' to="/portfolio" >
                        <p>More Info</p>
                    </Link>
                </div>
            </div>
            <div className='green-background'>
                <Testimonials />
                <div className='link--button'>
                    <Link className='link--button__link' to="/portfolio" >
                        <p>More Info</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default DashboardPage;