import React from 'react';
import { sendContact } from '../emailJS/email';

// const sendContact = (e) => {
//     e.preventDefault();
//     const data = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         text: document.getElementById('message').value
//     };
//     console.log(data);
// };

export const ContactForm = () => (
    <div className='contact-form'>
        <form id="contact-form">
            <div>
                <label className='contact-form__label' htmlFor="name">Your name:</label>
                <div>
                    <input className='contact-form__input' type="text" id="name" name="user_name" required></input>
                </div>
            </div>
            <div>
                <label className='contact-form__label' htmlFor="email">Your email address:</label>
                <div>
                    <input className='contact-form__input' type="email" id="email" name="user_email" required></input>
                </div>
            </div>
            <div>
                <label className='contact-form__label' htmlFor="message">Your message:</label>
                <div>
                    <textarea className='contact-form__input contact-form__textarea' id="message" name="message" required></textarea>
                </div>
            </div>
            <div>
                <button className='button--contact-form' onClick={sendContact}>SEND</button>
            </div>
        </form >
    </div >
);