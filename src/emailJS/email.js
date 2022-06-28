import React from 'react';
import emailjs from '@emailjs/browser';

export const sendContact = (e) => {
    e.preventDefault();
    emailjs.sendForm('portfolio_contact_form', 'portfolio_contact_form', '#contact-form', process.env.EMAILJS_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
};