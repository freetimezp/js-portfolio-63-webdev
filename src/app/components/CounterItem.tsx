"use client";
import React from 'react';
import './counterItem.css';
import CountUp from 'react-countup';

export default function CounterItem({ item }: {
    item: {
        id: number;
        icon: string;
        end: number;
        duration: number;
        name: string;
    }
}) {
    return (
        <div className='col-lg-3 col-md-6 mt-5 mt-md-0'>
            <div className="count-box">
                <i className={item.icon}></i>
                <CountUp start={0} end={item.end} duration={item.duration} />
                <p>{item.name}</p>
            </div>
        </div>
    );
}
