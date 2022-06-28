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
    <div>
        <form id="contact-form">
            <div>
                <label htmlFor="name">Your name</label>
                <div>
                    <input type="text" id="name" name="user_name" required></input>
                </div>
            </div>
            <div>
                <label htmlFor="email">Your email address</label>
                <div>
                    <input type="email" id="email" name="user_email" required></input>
                </div>
            </div>
            <div>
                <label htmlFor="message">Your message</label>
                <div>
                    <textarea id="message" name="message" required></textarea>
                </div>
            </div>
            <div>
                <button onClick={sendContact}>Send</button>
            </div>
        </form>
    </div>
);