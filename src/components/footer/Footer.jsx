import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer_container container">
            <h1 className="footer_title">Nitin Semwal</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className='footer_link'>About</a>
                </li>

                <li>
                    <a href="#portfolio" className='footer_link'>Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className='footer_link'>Testimonials</a>
                </li>
            </ul>

            <div className="footer_social">

                <a href="https://www.facebook.com/" className="home_social-icon" target='_blank' rel='noopener noreferrer'>
                    <i class="bx bxl-facebook"></i>
                </a>

                <a href="https://www.twitter.com/" className="home_social-icon" target='_blank' rel='noopener noreferrer'>
                    <i class="bx bxl-twitter"></i>
                </a>

                <a href="https://www.instagram.com/" className="home_social-icon" target='_blank' rel='noopener noreferrer'>
                    <i className="bx bxl-instagram"></i>
                </a>
                
                <a href="https://www.github.com/" className="home_social-icon" target='_blank' rel='noopener noreferrer'>
                    <i class="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer_copy">© NitinSemwal. All rights reserved</span>
        </div>
    </footer>
  );
};

export default Footer;
