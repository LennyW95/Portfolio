import React from 'react';
import { ContactForm } from './ContactForm';
import { SocialMadiaLinks } from './SocialMediaLinks';

export const Footer = () => (
    <div className='footer'>
        <h2>CONTACT ME</h2>
        <ContactForm />
        <SocialMadiaLinks />
    </div>
);