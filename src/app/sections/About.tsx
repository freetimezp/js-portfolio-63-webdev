import React from 'react';
import Image from 'next/image';
import './about.css';

import profileImg from '../../../public/assets/images/profile-img.jpg';

import SectionTitle from '../components/SectionTitle';

export default function About() {
    return (
        <section id="about" className='about'>
            <div className="container">
                <SectionTitle
                    title="about"
                    brief={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti quisquam eaque velit dolorem pariatur est dolor, 
                    nemo repellat explicabo fugit. Lorem ipsum dolor, sit amet consectetur 
                    adipisicing elit. Quibusdam, iusto ad. Voluptates nemo nobis fugiat 
                    iste. Possimus vitae est optio.`}
                />

                <div className='row'>
                    <div className="col-lg-4">
                        <Image
                            src={profileImg}
                            alt="profile"
                            className='img-fluid'
                        />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>UI/UX Designer &amp; Full Stack Web Developer.</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Modi nostrum nemo reprehenderit. Minima eaque ad non beatae
                            dicta iusto omnis.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Birthday:</strong> <span>1 May 1990</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Website:</strong> <span>email@email.com</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Phone:</strong> <span>+12 345 67890</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Location:</strong> <span>Ukraine</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Age:</strong> <span>29</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Degree:</strong> <span>Master</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Profession:</strong> <span>Web Developer</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        <strong>Freelance:</strong> <span>Available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                            rerum accusamus ex recusandae expedita maxime, asperiores odit
                            tempore, consectetur, quae culpa. Libero dolorem doloremque molestiae
                            eum. Doloribus accusamus praesentium perferendis maiores reprehenderit
                            laudantium molestiae nihil quis distinctio repudiandae rem voluptate,
                            recusandae molestias numquam, ab ipsam nemo! Magni quo fuga, iusto
                            dignissimos sunt suscipit sit ab.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
