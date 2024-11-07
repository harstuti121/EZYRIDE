import React from 'react';
import '../styles/Contact/Contact.css';
import p1 from '../images/contact/contact.png';

const ContactEzy = () => {
  return (
    <div className="contact_us_8">
      <div className="text-section">
        <h2>Contact Us</h2>
        <p className='har-p'>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          community.
        </p>
      </div>
      
      <div className="bottom-content">
        <div className="content-wrapper"> 
          <div className="image-section">
            <img src={p1} alt="Contact Illustration" />
          </div>    
          
          <form className="form-box">
            <div className="container-block form-wrapper">
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12">
                <input className="input" name="FirstName" placeholder="Enter your Name" required />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12">
                <input className="input" name="Email" placeholder="Enter your Email" required />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12">
                <input className="input" name="PhoneNumber" placeholder="Enter your Mobile Number" required />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12">
                <select name="CustomerType" className="input">
                  <option value="">You are a</option>
                  <option value="Customer">Customer</option>
                  <option value="Owner">Owner</option>
                </select>
              </div>
              <div className="responsive-cell-block">
                <textarea className="textinput" placeholder="Comment"></textarea>
              </div>

              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12 checkbox-container">
                <input type="checkbox" />
                <p className="checkbox-text">All the fields are correct</p>
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-8 wk-ipadp-12">
                <button type="submit" className="harstuti-btn">Submit</button>
              </div>
            </div>
          </form>        
        </div>
      </div>
    </div>
  );
};

export default ContactEzy;
