import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Connexion.css'

const Connexion = () => {
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
    }
  return (
    <div className='connexion'>
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <div className='welcome'>
            <h1 className='contact-header'>LOGIN FORM</h1>
            <p>Lorem ipsum dolor nchneviuepnivpiuiowjiojewejwm,miodwhiubhcbcuyhbuiewihibcnkocwnwuui</p>
          </div>
            <div className='field'>
              <label>
              Your Email:
              <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} /><br />
              </label>
            </div>
            <div className='field'>
              <label>
              Your Password:
              <input type="password" value={password} required onChange={(e)=> {handlePasswordChange(e)}} /><br/>
              </label>
            </div>
            <div className='account field' >
              <div className='input-wrap'>
                <input className='submit' type="submit" value="Login"/>
              </div>
              <div className='already-account'>
                    <h2>Don't have an account ?</h2>
                    <Link className='link' to='/connexion'>SignIn</Link>
              </div>
            </div>
        </form>
    </div>
  )
}

export default Connexion