import React from 'react';

const Social = () => {
  return (
    <div className='home_social'>
        <a href="https://www.facebook.com/" className="home_social-icon" target='_blank' rel='noopener noreferrer'>
            <i class="uil uil-facebook"></i>
        </a>

        <a href="https://www.twitter.com/" className="home_social-icon" target='_blank' rel='noopener noreferrer'>
            <i class="uil uil-twitter-alt"></i>
        </a>

        <a href="https://www.instagram.com/" className="home_social-icon" target='_blank' rel='noopener noreferrer'>
            <i className="uil uil-instagram"></i>
        </a>
        <a href="https://www.github.com/" className="home_social-icon" target='_blank' rel='noopener noreferrer'>
            <i class="uil uil-github"></i>
        </a>
    </div>
  );
};

export default Social;
