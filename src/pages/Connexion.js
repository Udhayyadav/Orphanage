import React from 'react'
import {IoMdClose} from 'react-icons/io'
import {BiLock} from 'react-icons/bi'
import {FiMail} from 'react-icons/fi'
import {ImGooglePlus2, ImFacebook2} from 'react-icons/im'
import {FaTwitterSquare, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import '../styles/Connexion.css'

const Connexion = ({openCon, onCloseCon}) => {

 const overlay_style = {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex : 1000
   }

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }

    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }

    const handleSubmit= async (e)=>{
      e.preventDefault();
      try {
        await axios.post('http://localhost:3001/api/user/login', {
           email: email,
           hash: password
       });
      } catch (err) {
        console.log(err)
      }
    }

    if(!openCon) return null

  return (
    < div className='connexion-wrapper'>
    <div style={overlay_style} />
    <div className='signUp'>
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <div className='welcome'>
            <div className='welcome-close'>
              <h3 className='contact-header'>SignIn Form</h3>
              <button onClick={onCloseCon}><IoMdClose /></button>
            </div>
            <p>Par mail</p>
          </div>
            <div className='field single'>
              <label>
              Your Email:
              <div className='icon-input'>
                <button>
                  <FiMail className='mail-icon' />
                </button>
                <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} />
              </div>
              </label>
            </div>
            <div className='field single'>
              <label>
              Your Password:
              <div className='icon-input'>
                <button>
                <BiLock className='pass-icon' />
                </button>
                <input type="password" value={password} required onChange={(e)=> {handlePasswordChange(e)}} />
              </div>
              </label>
            </div><br/>
            <div className='field single' >
              <div className='input-wrap'>
                <input className='submit' type="submit" value="SignUp"/>
              </div>
            </div>
            <div className='reseaux'>
              <p>Ou via reseaux sociaux</p>
              <div className='reseaux-icons'>
                <span className='icon-1'><ImGooglePlus2 /></span>
                <span className='icon-2'><ImFacebook2 /></span>
                <span className='icon-3'><FaTwitterSquare /></span>
                <span className='icon-4'><FaLinkedin /></span>
              </div>
            </div>
            <div className='already-account'>
                <h2>Already have an account ?</h2>
                <Link className='link' to='/connexion'>Login</Link>
            </div>
        </form>
    </div>
  </div>
  )
}

export default Connexion