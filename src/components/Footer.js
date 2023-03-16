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
import img6 from '../assets/flou2.png'
import img7 from '../assets/kid.jpg'

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='top'>
        <div className='footer-left'>
          <div><h2>WECARE</h2></div>
          <div className='footer-text'>
            <h4>WeCare</h4>
            <p>Give your share to show you care.
               WeCare's aim is to join donators and orphanages
                so as to reduce the problem of visibility that many
                 orphanages in the country are facing. You can help 
                 us by making us a donation on the website.
            </p>
          </div>
          <h3>Suivez Nous:</h3>
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
        </div>
        <div className='middle'>
          <h3>Dernieres actualites</h3>
          <div className='footer-actu'>
            <div><img src={img6} alt='' /></div>
            <div className='footer-orph'>
              <h3> Orphelinat main dans la main</h3>
              <p>cas de maladie</p>
            </div>
          </div>
          <div className='footer-actu'>
            <div><img src={img7} alt='' /></div>
            <div className='footer-orph'>
              <h3>Lea et ses petits enfants</h3>
              <p>Reception du materiel</p>
            </div>
          </div>
          <div className='footer-actu'>
            <div><img src={img7} alt='' /></div>
            <div className='footer-orph'>
              <h3>Lea et ses petits enfants</h3>
              <p>Reception du materiel</p>
            </div>
          </div>
        </div>
        <div className='right'>
          <div><h3>Newsletter</h3></div>
          <p>Connectez/Inscrivez vous sur la plateforme pour voir les dernieres actualites</p>
          <div className='footer-input'>
            <input type='text' placeholder='Entrez votre adresse Email...' />
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
    </div>
      <div className='bottom'>
        <div className='copyright'>
          <p>Designed by MAISOFT | 2023 WeCare. All rights reserved.</p>
        </div>
         <div>
          <Link className='footer-link' to='/'>Acceuil</Link>
          <Link className='footer-link' to='/about'>A Propos</Link>
          <Link className='footer-link' to='/actu'>Actualites</Link>
          <Link className='footer-link' to='/orphanages'>Orphelinat</Link>
          <Link className='footer-link' to='/contact'>Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Footer