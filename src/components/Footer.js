import React from 'react'
import '../styles/footer.css'
import {Link} from 'react-router-dom'
import {FaInstagram, FaTwitter, FaFacebookF} from 'react-icons/fa'
import {TbSend} from 'react-icons/tb'
import img1 from '../assets/orange.png'
import img2 from '../assets/mtn.jpg'
import img3 from '../assets/mastercard.png'
import img4 from '../assets/visa.png'
import img5 from '../assets/paypal.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div><h2>WECARE</h2></div>
        <div>
          <Link className='footer-link' to='/'>Acceuil</Link>
          <Link className='footer-link' to='/about'>A Propos</Link>
          <Link className='footer-link' to='/actu'>Actualites</Link>
          <Link className='footer-link' to='/orphanages'>Orphelinat</Link>
          <Link className='footer-link' to='/contact'>Contact</Link>
        </div>
        <div><h3>Newsletter</h3></div>
      </div>
      <div className='middle'>
        <div className='footer-logo'>
          <div className='footer-icon facebook' >
            <FaFacebookF />
          </div> 
          <div className='footer-icon instagram'>
            <FaInstagram />
          </div> 
          <div className='footer-icon twitter'>
            <FaTwitter/>
          </div> 
        </div>
        <div className='footer-text'>
          <h4>WeCare</h4>
          <p>Give your share to show you care. WeCare's aim is to join donators and orphanages so as to reduce the problem of visibility of orphanages. 
          </p>
        </div>
        <div className='right'>
          <div className='footer-input'>
            <input type='text' />
            <button><TbSend /></button>
          </div>
          <div className='payment'>
            <img src={img1} alt='' className='paymentMethod' />
            <img src={img2} alt='' className='paymentMethod' />
            <img src={img3} alt='' className='paymentMethod' />
            <img src={img4} alt='' className='paymentMethod' />
            <img src={img5} alt='' className='paymentMethod' />
          </div>
        </div>
      </div>
      <div className='bottom'>
        <p>Designed by MAISOFT | 2023 WeCare. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer