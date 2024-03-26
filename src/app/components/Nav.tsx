"use client";
import React, { useState, useEffect } from 'react';
import './nav.css';

import { navs } from '../data/data';

export default function Nav() {
    const [navList, setNavList] = useState<any | []>([]);

    useEffect(() => {
        setNavList(navs);
    }, []);

    const handleScrollTo = (section: string) => {

    };

    return (
        <nav id="navbar" className='navbar nav-menu'>
            <ul>
                {navList.map((nav: {
                    id: React.Key;
                    icon: string;
                    name: string;
                    active: boolean;
                    target: string;
                }) => (
                    <li key={nav.id}>
                        <a
                            href="#"
                            className={`nav-link scrollto ${nav.active ? 'active' : undefined}`}
                            onClick={() => handleScrollTo(nav.target)}
                        >
                            <i className={nav.icon}></i> <span>{nav.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
