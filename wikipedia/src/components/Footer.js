import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <hr/>
      <p>This page was last edited on 9 May 2023, at 13:56 (UTC).</p>
      <p>Text is available under the <a href='#'>Creative Commons Attribution-ShareAlike License 3.0</a>; additional terms may apply. By using this site, you agree to the <a href='#'>Terms of Use</a> and <a href='#'>Privacy Policy</a>. Wikipedia® is a registered trademark of the <a href='#'>Wikimedia Foundation, Inc.</a>, a non-profit organization.</p>
      <div className='footer-policy'>
        <div className='policy'>
          <label>Privacy policy</label>
          <label>About Wikipedia</label>
          <label>Disclaimers</label>
          <label>Contact Wikipedia</label>
          <label>Mobile View</label>
          <label>Developers</label>
          <label>Statistics</label>
          <label>Cookie statement</label>
        </div>
        <div className='image-buttons'>
          <button type='button'><img src={require('../images/poweredby_mediawiki.png')} /></button>
          <button type='button'><img src={require('../images/wikimedia-button.png')} /></button>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
