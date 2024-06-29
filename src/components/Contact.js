import React from "react";
import "../styles/contact.css";
import {HiOutlinePhone} from 'react-icons/hi'
import {FiMail} from 'react-icons/fi'
import {TfiLocationPin} from 'react-icons/tfi'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-top">
        <h1>Contact Informations</h1>
        <p>
        9700700700
        Info@ashakuteer.org
        </p>
        <button className='button'>Contact Us</button>
      </div>
      <div className="contact-middle">
        <div className="contact-details">
          <div className="detail-item">
            <div className="detail-icon">
              <HiOutlinePhone sx={{color:'orange'}}/>
            </div>
            <div className="detail-text">
              <h3>Phone Number</h3>
              <p>9700700700</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <TfiLocationPin sx={{color:'orange'}} fontSize="small" />
            </div>
            <div className="detail-text">
              <h3>No.: 75. Road No.: 2, Shankar Nagar, Peerzadiguda, Hyderabad 500039</h3>
              <p>Plot No.: 2 & 3, 2nd Floor,</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <FiMail sx={{color:'orange'}} fontSize="small" />
            </div>
            <div className="detail-text">
              <h3>Email Adress</h3>
              <p>Info@ashakuteer.org</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <HiOutlinePhone sx={{color:'orange'}} fontSize="small" />
            </div>
            <div className="detail-text">
              <h3>What else?</h3>
              <p></p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-heading">
              <h3>Send Message</h3>
              {/* <p>esiugceygvuerhvuierueribuier</p> */}
            </div>
            <div className="form-group two-field">
              <input type="text" placeholder="Firstname" />
              <input type="text" placeholder="Lastname" />
            </div>
            <div className="form-group two-field">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Email address" />
            </div>
            <div className="form-group ">
              <input className="textarea" type="text" placeholder="Message" />
            </div>

            <button className='button'>Send Message</button>
          </form>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="contact-bottom-text">
          <h1>Find us on google maps</h1>
          <h5>
          Plot No.: 2 & 3, 2nd Floor, Survey

No.: 75. Road No.: 2, Shankar Nagar, Peerzadiguda, Hyderabad 500039
          </h5>
        </div>
        <div className="contact-map">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe width="100%" height="400px" id="gmap_canvas" src="https://maps.google.com/maps?q=Plot%20No.%3A%202%20%26%203%2C%202nd%20Floor%2C%20Survey%20%20No.%3A%2075.%20Road%20No.%3A%202%2C%20Shankar%20Nagar%2C%20Peerzadiguda%2C%20Hyderabad%20500039&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0">
            </iframe>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
