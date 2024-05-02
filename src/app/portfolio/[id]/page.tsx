/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from 'react';
import './style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { accessSync } from 'fs';

export default function PortfolioDetails({ params }: { params: { id: string } }) {
    const id = params.id;
    const [item, setItem] = useState<any | []>([]);

    const getPortfolioDetailsData = async (id: string) => {
        const result = await fetch(`https://js-portfolio-63-webdev.vercel.app/api/portfolio/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(err => console.log(err.message));
    };

    useEffect(() => {
        getPortfolioDetailsData(id);
    }, [id]);

    return (
        <main id="main">
            <section id="portfolio-details" className='portfolio-details'>
                <div className='container'>
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            <Swiper
                                spaceBetween={0}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false
                                }}
                                pagination={{
                                    el: '.swiper-pagination',
                                    type: 'bullets',
                                    clickable: true
                                }}
                                modules={[Autoplay, Pagination]}
                                loop={true}
                                className='portfolio-details-slider swiper'
                            >
                                {item
                                    && item.gallery
                                    && item.gallery.length > 0
                                    && item.gallery.map((img: string, i: string) => (
                                        <SwiperSlide key={i}>
                                            <img src={img} alt="gallery" />
                                        </SwiperSlide>
                                    ))}
                                <div className="swiper-pagination"></div>
                            </Swiper>
                        </div>

                        <div className="col-lg-4">
                            <div className="portfolio-info">
                                <h3>Project information</h3>
                                <ul>
                                    <li>
                                        <strong>Category</strong>:{' '}
                                        {item.category && item.category.toUpperCase()}
                                    </li>
                                    <li>
                                        <strong>Client</strong>: XXX Company
                                    </li>
                                    <li>
                                        <strong>Project Date</strong>: 01 March, 2024
                                    </li>
                                    <li>
                                        <strong>Project URL</strong>:{' '}
                                        <a href="#">www.mywebsite.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="portfolio-description">
                                <h2>This is an example of portfolio detail - {item.id}</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nihil recusandae ratione repellendus sint expedita iste
                                    perspiciatis similique. Nobis fugiat nulla unde a reprehenderit
                                    cum, at illum iusto totam, ipsa impedit.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nihil recusandae ratione repellendus sint expedita iste
                                    perspiciatis similique. Nobis fugiat nulla unde a reprehenderit
                                    cum, at illum iusto totam, ipsa impedit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
