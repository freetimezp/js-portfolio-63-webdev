"use client";
import React from 'react';
import './hero.css';

import { ReactTyped } from 'react-typed';

export default function Hero() {
    return (
        <section id="hero" className='d-flex flex-column justify-content-center'>
            <div className="container">
                <h1>
                    <span>Jenya</span> {' '}
                    <span>Onoprienko</span>
                </h1>
                <p>
                    I&#39;m{' '}
                    <ReactTyped
                        strings={['Web Developer', 'Frontend Developer', 'Backend Developer', 'from Ukraine']}
                        typeSpeed={100}
                        backSpeed={50}
                        backDelay={2000}
                        loop
                    />
                </p>

                <div className="social-links">
                    <a href="#" className="twitter">
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#" className="instagram">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#" className="google-plus">
                        <i className="bx bxl-skype"></i>
                    </a>
                    <a href="#" className="linkedin">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
