import React from 'react';
import './header.css';


import Nav from './Nav';

export default function Header() {
    return (
        <header id="header" className='d-flex flex-column justify-content-center'>
            <Nav />
        </header>
    );
}
