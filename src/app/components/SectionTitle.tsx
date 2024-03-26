"use client";
import React from 'react';
import './sectionTitle.css';

export default function SectionTitle({
    title,
    brief
}: {
    title: string;
    brief: string
}) {
    return (
        <div className='section-title'>
            <h2>{title}</h2>
            <p>{brief}</p>
        </div>
    );
}
