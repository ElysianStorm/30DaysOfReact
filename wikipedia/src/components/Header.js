import React from 'react';
import 'react-bootstrap';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineEllipsis } from 'react-icons/ai';
import './Header.css'

const header = () => {
    return (
    <div className='header'>
        <div className='logo'>
          <button type='button' className='outline-menu'>< AiOutlineMenu /></button>
          <img src={require('../images/Wikipedia-Emblem.png')} alt='Wikipedia-logo' width='50px' height='50px'></img>
          <img src={require('../images/wikipedia-text-logo.png')} alt='Wikipedia-text-logo' width='150px' height='50px'></img>
        </div>
        <div className='header-search'>
          <AiOutlineSearch />
          <input type='text' placeholder='Search Wikipedia' />
        </div>
        <div className='header-links'>
          <a href='#'>Create account</a>
          <a href='#'>Log in</a>
          < AiOutlineEllipsis />
        </div> 
    </div>
  );
}

export default header;
