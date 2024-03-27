import React from 'react';
import './servicesItem.css';

export default function ServicesItem({ item }: {
    item: {
        id: number;
        delay: string;
        svgPath: string;
        icon: string;
        iconColor: string;
        name: string;
        brief: string;
    }
}) {
    return (
        <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'>
            <div className={`icon-box iconbox-${item.iconColor}`}>
                <div className="icon">
                    <svg
                        width="100" height="100" viewBox="0 0 600 600"
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path stroke='none' strokeWidth="0"
                            fill="#f5f5f5" d={item.svgPath}></path>
                    </svg>
                    <i className={item.icon}></i>
                </div>

                <h4><a href="#">{item.name}</a></h4>
                <p>{item.brief}</p>
            </div>
        </div>
    );
}
