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
          Lorem ipsumhfeuhuieuiebb bjd jdn bjkkdkkdkkkkkkk
          jdjdjdjjdjnjnjnjnfffdfldldlk jdfdnjdfjvjfdbvdjfjfdj
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
              <p>+237 697564387</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <TfiLocationPin sx={{color:'orange'}} fontSize="small" />
            </div>
            <div className="detail-text">
              <h3>Douala,Sable</h3>
              <p>Ancienne maison du plombier</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <FiMail sx={{color:'orange'}} fontSize="small" />
            </div>
            <div className="detail-text">
              <h3>Email Adress</h3>
              <p>WECARE@gmail.com</p>
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
              <p>esiugceygvuerhvuierueribuier</p>
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
            lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem
            
            loremlorem lorem lorem lorem loremlorem lorem 
          </h5>
        </div>
        <div className="contact-map">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe width="100%" height="400px" id="gmap_canvas" src="https://maps.google.com/maps?q=bonamoussadi, sable&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0">
            </iframe>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
