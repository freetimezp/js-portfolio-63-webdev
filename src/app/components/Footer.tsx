import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <footer id="footer">
            <div className='container'>
                <h3>Jenya Onoprienko</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                    exercitationem distinctio error libero dicta enim vel a sapiente
                    maxime mollitia.
                </p>
                <div className="social-links">
                    <a href="#" className="twiiter"><i className='bx bxl-twitter'></i></a>
                    <a href="#" className="facebook"><i className='bx bxl-facebook'></i></a>
                    <a href="#" className="instagram"><i className='bx bxl-instagram'></i></a>
                    <a href="#" className="google-plus"><i className='bx bxl-skype'></i></a>
                    <a href="#" className="linkedin"><i className='bx bxl-linkedin'></i></a>
                </div>
                <div className="copyright">
                    &copy; Copyright{' '}
                    <strong>
                        <span>Personal Profile</span>
                    </strong>. All Rights Reserved.
                </div>
                <div className="credits">
                    Designed by <a href="#">Freetime</a>
                </div>
            </div>
        </footer>
    );
}
