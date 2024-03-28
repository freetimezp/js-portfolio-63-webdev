"use client";
import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import './testimonials.css';
import TestimonialsItem from '../components/TestimonialsItem';

export default function Testimonials() {
    const [slides, setSlides] = useState<any | []>([]);

    const getTestimonialsData = () => {
        fetch('http://localhost:3000/api/testimonials')
            .then(res => res.json())
            .then(data => setSlides(data))
            .catch(err => console.log(err.message));
    };

    useEffect(() => {
        getTestimonialsData();
    }, []);

    return (
        <section id="testimonials" className="testimonials section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Testimonials</h2>
                </div>

                <div data-aos="fade-up" data-aos-delay="100">
                    <Swiper
                        slidesPerView={'auto'}
                        speed={600}
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
                        className='testimonials-slider swiper'
                    >
                        {slides && slides.length > 0 && slides.map((slide: {
                            id: number;
                            content: string;
                            avatar: string;
                            client: string;
                            position: string;
                        }) => (
                            <SwiperSlide key={slide.id} >
                                <TestimonialsItem item={slide} />
                            </SwiperSlide>
                        ))}

                    </Swiper>

                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    )
}
