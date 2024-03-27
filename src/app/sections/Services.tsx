import React from 'react';
import './services.css';
import SectionTitle from '../components/SectionTitle';
import ServicesItem from '../components/ServicesItem';

async function getServicesData() {
    const res = await fetch('http://localhost:3000/api/services');
    return res.json();
}

export default async function Services() {
    const items: [] = await getServicesData();

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
                    {items.map((item: {
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
