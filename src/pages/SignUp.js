import React from 'react'
import '../styles/SignUp.css'
import {IoMdClose} from 'react-icons/io'
import {BsPerson} from 'react-icons/bs'
import {BiLock} from 'react-icons/bi'
import {FiMail} from 'react-icons/fi'
import {HiOutlinePhone} from 'react-icons/hi'
import {TfiLocationPin} from 'react-icons/tfi'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = ({open, onClose}) => {
  const overlay_style = {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex : 1000
   }

  
  const [name , setName] = useState('');
  const [lname , setLname] = useState('');
  const [email , setEmail] = useState('');
  const [phone , setPhone] = useState('');
  const [address , setAdress] = useState('');
  const [password , setPassword] = useState('');
  const [confPassword , setConfPassword] = useState('');
  const [type , setType] = useState('DONATOR');
  const navigate = useNavigate()
  
  const handleChange =(e)=>{
    setName(e.target.value);
  }
  const handleLastnameChange =(e)=>{
    setLname(e.target.value);
  }
    const handleAddressChange =(e)=>{
      setAdress(e.target.value);
    }
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
    const handlePhoneChange =(e)=>{
      setPhone(e.target.value);
    }
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
    
    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }
    const handleTypeChange =(e)=>{
      setType(e.target.value);
    }
    
    if(!open) return null
    const handleSubmit= async (e)=>{
      if(password!==confPassword)
      {
        alert("password Not Match");
      }
      else{
        alert('A form was submitted with Name :"' + name +
        '" ," Email :"' + email + '", and Phone :"'+phone+'"');
        onClose();

      }
      e.preventDefault();
      try {
        await axios.post('http://localhost:3001/api/user/register', {
           firstname: name,
           lastname: lname,
           email: email,
           hash: password,
           address: address,
           phone: phone,
           type: type
       });
      console.log(type)
        
      } catch (err) {
        console.log(err)
      }
      navigate("/")
      
    }

   
  return (
    <>
    <div style={overlay_style} />
    <div className='signUp'>
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <div className='welcome'>
            <div className='welcome-close'>
              <h3 className='contact-header'>SignUp Form</h3>
              <button onClick={onClose}><IoMdClose /></button>
            </div>
          </div>
            <div className='field single'>
              <label >
              Your Firstname:
              <div className='icon-input'>
                <button>
                  <BsPerson className='name-icon' />
                </button>
                <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} />
              </div>
              </label>
              <label >
              Your Lastame:
              <div className='icon-input'>
                <button>
                <BsPerson className='Lname-icon' />
                </button>
                <input type="text" value={lname} required onChange={(e)=> {handleLastnameChange(e)}} /><br />
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
              <label>
              Confirm Password:
              <div className='icon-input'>
                <button>
                  <BiLock className='Cpass-icon' />
                </button>
                <input type="password" value={confPassword} required onChange={(e)=> {handleConfPasswordChange(e)}} />
              </div>
              </label>
            </div>
            <div className='field'>
              <label>
              Your Email:
              <div className='icon-input'>
                <button>
                  <FiMail className='mail-icon' />
                </button>
                <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} />
              </div>
              </label>
              <label>
              Your Phone:
              <div className='icon-input'>
                <button>
                <HiOutlinePhone className='phone-icon' />
                </button>
                <input type='tel' value={phone} required onChange={(e)=> {handlePhoneChange(e)}} />
              </div>
              </label>
            </div>
            <div className='field'>
              <label>
              Your Address:
              <div className='icon-input'>
                <button>
                <TfiLocationPin className='address-icon' />
                </button>
                <input type='text' value={address} required onChange={(e)=> {handleAddressChange(e)}} />
              </div>
              </label>
              <label>
              Type of User:
                  <select name="type" value={type}  onChange={(e)=> {handleTypeChange(e)}}>
                    <option value='ORPHANAGE'>Orphanage</option>
                    <option value='DONATOR'>Donator</option>
                  </select>
              </label>
            </div>
            <div className='field' >
              <div className='input-wrap'>
                <input className='submit' type="submit" value="SignUp"/>
              </div>
              <div className='already-account'>
                <h2>Already have an account ?</h2>
                <Link className='link' to='/connexion'>Login</Link>
              </div>
            </div>
        </form>
    </div>
  </>
  )
}

export default SignUp