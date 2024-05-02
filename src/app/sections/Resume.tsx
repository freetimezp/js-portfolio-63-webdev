"use client";
import React, { useEffect, useState } from 'react';
import './resume.css';
import SectionTitle from '../components/SectionTitle';
import ResumeItem from '../components/ResumeItem';

export default function Resume() {
    const [data, setData] = useState<[] | any>([]);
    const [items, setItems] = useState<[] | any>([]);

    const getResumeData = async () => {
        await fetch('https://js-portfolio-63-webdev.vercel.app/api/resume')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err.message));
    };

    useEffect(() => {
        getResumeData();
    }, []);

    useEffect(() => {
        setItems(data);
    }, [data]);

    //console.log(items);

    return (
        <section id="resume" className='resume'>
            <div className="container">
                <SectionTitle
                    title="Resume"
                    brief={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Labore tenetur nam, dolor commodi laborum ipsam praesentium amet 
                    nulla similique ratione corporis molestias vitae in corrupti et 
                    sequi quisquam, id iste eius necessitatibus! Beatae, nostrum 
                    blanditiis.`}
                />

                {items && items.length > 0 && (
                    <div className='row'>
                        <div className="col-lg-6">
                            <h3 className="resume-title">{items[0]?.category}</h3>
                            {items && items.length > 0 && items[0].content.map((item: {
                                id: number;
                                title: string;
                                period: string;
                                brief: string;
                                details: [string];
                            }) => (
                                <ResumeItem key={item.id} item={item} />
                            ))}

                            <h3 className="resume-title">{items[1]?.category}</h3>
                            {items && items.length > 0 && items[1].content.map((item: {
                                id: number;
                                title: string;
                                period: string;
                                brief: string;
                                details: [string];
                            }) => (
                                <ResumeItem key={item.id} item={item} />
                            ))}
                        </div>
                        <div className="col-lg-6">
                            <h3 className="resume-title">{items[2]?.category}</h3>
                            {items && items.length > 0 && items[2].content.map((item: {
                                id: number;
                                title: string;
                                period: string;
                                brief: string;
                                details: [string];
                            }) => (
                                <ResumeItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
