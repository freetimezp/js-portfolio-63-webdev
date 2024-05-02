"use client";
import React, { useEffect, useState } from 'react';
import './services.css';
import SectionTitle from '../components/SectionTitle';
import ServicesItem from '../components/ServicesItem';

export default function Services() {
    const [data, setData] = useState([]);
    const [items, setItems] = useState([]);

    const getServicesData = async () => {
        await fetch('https://js-portfolio-63-webdev.vercel.app/api/services')
            .then(res => res.json())
            .then(services => setData(services))
            .catch(err => console.log(err.message));
    };

    useEffect(() => {
        getServicesData();
    }, []);

    useEffect(() => {
        setItems(data);
    }, [data]);

    return (
        <section id="services" className='services'>
            <div className="container">
                <SectionTitle
                    title="Services"
                    brief={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repellendus possimus culpa illo magnam ratione quos deleniti error 
                    non maiores odit eveniet, aliquam officia hic dolores tempora nobis? 
                    Mollitia corrupti blanditiis soluta natus nobis! Ipsa, veniam.`}
                />

                <div className="row">
                    {items && items.length > 0 && items.map((item: {
                        id: number;
                        delay: string;
                        svgPath: string;
                        icon: string;
                        iconColor: string;
                        name: string;
                        brief: string;
                    }) => (
                        <ServicesItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
