import React from 'react';
import './contact.css';
import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <section id="contact" className='contact'>
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                </div>

                <div className="row mt-1">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>My Street, My City, Ukraine</p>
                            </div>
                            <div className="email">
                                <i className='bi bi-envelope'></i>
                                <h4>Email:</h4>
                                <p>email@email.com</p>
                            </div>
                            <div className="phone">
                                <i className='bi bi-phone'></i>
                                <h4>Phone:</h4>
                                <p>+12 345 67890</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
