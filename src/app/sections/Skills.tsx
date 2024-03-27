"use client";
import React, { useState, useEffect } from 'react';
import './skills.css';

import { skillsData } from '../data/data';

import SectionTitle from '../components/SectionTitle';
import ProgressBar from '../components/ProgressBar';

export default function Skills() {
    const [skills, setSkills] = useState(skillsData);
    const [scroll, setScroll] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });

        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        }
    }, [scroll]);

    const handleSectionActive = () => {
        let sectionPosition: HTMLElement | any = document.querySelector("#skills");
        let position = scroll + 500;

        if (position >= sectionPosition.offsetTop
            && position <= sectionPosition.offsetTop + sectionPosition.offsetHeight) {
            setActive(true);
        }
    }

    useEffect(() => {
        handleSectionActive();
    }, [scroll]);

    return (
        <section id='skills' className='skills section-bg'>
            <div className="container">
                <SectionTitle
                    title='Skills'
                    brief={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ex illum dolor quasi nesciunt totam minus error libero. 
                    Amet, veritatis at obcaecati ex mollitia, qui ad, vitae 
                    sed odit molestiae rerum.`}
                />

                <div className='row skills-content'>
                    <div className="col-lg-6">
                        {skills.slice(0, 3).map(skill => (
                            <ProgressBar
                                key={skill.id}
                                status={active}
                                item={skill}
                            />
                        ))}
                    </div>
                    <div className="col-lg-6">
                        {skills.slice(3, 6).map(skill => (
                            <ProgressBar
                                key={skill.id}
                                status={active}
                                item={skill}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
