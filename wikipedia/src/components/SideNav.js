import React from 'react';
import './SideNav.css';

const SideNav = () => {
  return (
    <div className='sidenav-container'>
        <span className='content-header'>
            <p>Contents [<button className='hide' type='button'>hide</button>]</p>
        </span>
        <hr/>
        <div className='contents'>
            <label><a href="#">(Top)</a></label>
            <label><a href="#">History</a></label>
            <label><a href="#">Characteristics</a></label>
            <label><a href="#">Reaction and reception</a></label>
            <label><a href="#">References</a></label>
            <label><a href="#">Further reading</a></label>
            <label><a href="#">External links</a></label>
        </div>
    </div>
  );
}

export default SideNav;
