import React from "react";
import { BsCloudCheck } from 'react-icons/bs';
import './MyReactExperience.css'

const MyReactExperience = () => {
  return (
    <div className="container">
      <section className="section desc">
        <div className="ribbon"></div>
        <h1>My React Experience</h1>
        <p>A quick form to understand what is your experience in React</p><hr />
        <div className="loggedIn-email">
          <p style={{fontWeight: 'bold'}}>singhalok1999@gmail.com 
          <a href='#' style={{textDecoration: 'none'}}> Switch account</a>
          <BsCloudCheck className="icon" /></p>
          <br />
          <p>The name and photo associated with your Google account will be recorded 
            when you upload files and submit this form. Your email is not part of your 
            response.</p>
        </div>
        <hr />
        <p className="mandatory-message">* Indicates required question</p>
      </section>

      <section className="section">
        <span className="question"><p>Do you know what React is? </p><p className="mandatory-star"> *</p></span>
        <div className="answers">
          <input type="radio" name='react-ans' value='Yes' />
            <label for='yes'>Yes</label><br />
          <input type="radio" name='react-ans' value='No' />
            <label for='no'>No</label><br />
        </div>
      </section>
      
      <section className="section">
        <span className="question"><p>What is your current understanding of React and its usage?</p><p className="mandatory-star"> *</p></span>
        <div className="answers">
          <input className="input-text" type='text' name='react-ans' placeholder="Your answer" />
        </div>
      </section>

      <section className="section">
        <span className="question"><p>Rate yourself in your comfortability in React?</p><p className="mandatory-star"> *</p></span>
        <div className="answers range-answer">
        <label className="vertical-radio">
            <p className="value"></p>
            <p className="value">React What?</p>
          </label>
          <label className="vertical-radio">
            <p className="value">1</p>
            <input type="radio" name="react-ans"/>
          </label>
          <label className="vertical-radio">
            <p className="value">2</p>
            <input type="radio" name="react-ans"/>
          </label>
          <label className="vertical-radio">
            <p className="value">3</p>
            <input type="radio" name="react-ans"/>
          </label>
          <label className="vertical-radio">
            <p className="value">4</p>
            <input type="radio" name="react-ans"/>
          </label>
          <label className="vertical-radio">
            <p className="value">5</p>
            <input type="radio" name="react-ans"/>
          </label>
          <label className="vertical-radio">
            <p className="value"></p>
            <p className="value">Expert, Bring It On!!!</p>
          </label>
        </div>
      </section>

      <section className="section">
        <span className="question"><p>Do you want to proceed to share your purpose or experience with React? </p></span>
        <div className="answers">
          <input type="radio" name='react-ans' value='Yes' />
            <label for='yes'>Nah, too much work</label><br />
          <input type="radio" name='react-ans' value='No' />
            <label for='no'>Sure, I have so much to share</label><br />
        </div>
      </section>

      <div className="submit">
        <button type="button" className="next">Next</button>
        <button type="button" className="clear-form">Clear form</button>
      </div>
    </div>
  );
}

export default MyReactExperience;

