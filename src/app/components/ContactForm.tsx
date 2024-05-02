"use client";
import React, { useState } from 'react';
import './contactForm.css';

export default function ContactForm() {
    const initialState = {
        name: '',
        email: '',
        subject: '',
        message: '',
        validate: ''
    };

    const [text, setText] = useState(initialState);

    const handleTextChange = (e: Event | any) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value, validate: '' });
    };

    const handleSubmitForm = async (e: Event | any) => {
        e.preventDefault();

        if (text.name === '' || text.email === '' || text.subject === '' || text.message === '') {
            setText({ ...text, validate: 'incomplete' });
            return;
        }

        //post request to contact API
        try {
            const response = await fetch('https://js-portfolio-63-webdev.vercel.app/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(text),
            });

            setText({ ...text, validate: 'loading' });

            const result = await response.json();
            if (result) {
                setText({ ...text, validate: 'success' });
            }
        } catch (err) {
            setText({ ...text, validate: 'error' });
        }
    };

    return (
        <form className='contact-form' onSubmit={handleSubmitForm}>
            <div className="row">
                <div className="col-md-6 form-group">
                    <input
                        type="text"
                        name='name'
                        value={text.name}
                        className='form-control'
                        placeholder='Your Name'
                        onChange={handleTextChange}
                    />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                        type="email"
                        name='email'
                        value={text.email}
                        className='form-control'
                        placeholder='Your Email'
                        onChange={handleTextChange}
                    />
                </div>
            </div>
            <div className="form-group mt-3">
                <input
                    type="text"
                    name='subject'
                    value={text.subject}
                    className='form-control'
                    placeholder='Subject'
                    onChange={handleTextChange}
                />
            </div>
            <div className="form-group mt-3">
                <textarea
                    rows={5}
                    name='message'
                    value={text.message}
                    className='form-control'
                    placeholder='Message'
                    onChange={handleTextChange}
                ></textarea>
            </div>

            <div className="my-3">
                {text.validate === 'loading' && (
                    <div className='loading'>Sending message</div>
                )}
                {text.validate === 'incomplete' && (
                    <div className='error-message'>Please fill all fields above</div>
                )}
                {text.validate === 'success' && (
                    <div className='sent-message'>Your message were sent. We contact you soon..</div>
                )}
                {text.validate === 'error' && (
                    <div className='error-message'>Server error</div>
                )}
            </div>

            <div className="text-center">
                <button type='submit'>
                    Send message
                </button>
            </div>
        </form>
    );
}
