import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer container'>
      <span className='advice-text'><p>Never submit passwords through Google Forms.</p></span>
      <span className='rights'>
        <p>This content is neither created nor endorsed by Google. <a href="#">Report Abuse</a> -
            <a href="#">Terms of Service</a> -
            <a href="#">Privacy Policy</a>
        </p>
      </span>
      <div className='logo'>
        <a href='#' className='logo-link'>
            <img src={require('../images/google-logo.png')} alt='Google' width='74px' height='24px' />
            <span className='logo-text'> Forms</span></a>
      </div>
    </div>
  );
}

export default Footer;
