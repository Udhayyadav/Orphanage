import React from 'react'
import '../styles/SignUp.css'
import {IoMdClose} from 'react-icons/io'
import {BsPencil} from 'react-icons/bs'
import {BiLock} from 'react-icons/bi'
import {FiMail} from 'react-icons/fi'
import {HiOutlinePhone} from 'react-icons/hi'
import {TfiLocationPin} from 'react-icons/tfi'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

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
  // const navigate = useNavigate()
  
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
        // if 'password' and 'confirm password'
        // does not match.
        alert("password Not Match");
      }
      else{
        // display alert box with user
        // 'name' and 'email' details .
        alert('A form was submitted with Name :"' + name +
        '" ," Email :"' + email + '", and Phone :"'+phone+'"');

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
      // navigate("/")
      
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
            {/* <p>Lorem ipsum dolor nchneviuepnivpiuiowjiojewejwm,miodwhiubhcbcuyhbuiewihibcnkocwnwuui</p> */}
          </div>
            <div className='field single'>
              <label >
              Your Firstname:
              <BsPencil className='name-icon' />
              <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} />
              </label><br/>
              <label >
                <BsPencil className='Lname-icon' />
              Your Lastame:
              <input type="text" value={lname} required onChange={(e)=> {handleLastnameChange(e)}} />
              </label><br />
            </div><br/>
            <div className='field single'>
              <label>
                <BiLock className='pass-icon' />
              Your Password:
              <input type="password" value={password} required onChange={(e)=> {handlePasswordChange(e)}} />
              </label><br/>
              <label>
              <BiLock className='Cpass-icon' />
              Confirm Password:
              <input type="password" value={confPassword} required onChange={(e)=> {handleConfPasswordChange(e)}} />
              </label><br />
            </div><br/>
            <div className='field'>
              <label>
              Your Email:
              <FiMail className='mail-icon' />
              <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} /><br />
              </label><br />
              <label>
                <HiOutlinePhone className='phone-icon' />
              Your Phone:
              <input type='tel' value={phone} required onChange={(e)=> {handlePhoneChange(e)}} /><br />
              </label>
            </div>
            <div className='field'>
              <label>
                <TfiLocationPin className='address-icon' />
              Your Address:
              <input type='text' value={address} required onChange={(e)=> {handleAddressChange(e)}} /><br />
              </label>
              <label>
              Type of User:
                  <select name="type" value={type}  onChange={(e)=> {handleTypeChange(e)}}>
                    <option value='ORPHANAGE'>Orphanage</option>
                    <option value='DONATOR'>Donator</option>
                  </select>
              </label>
            </div>
                {/* <input type="text" value={type} required onChange={(e)=> {handleTypeChange(e)}} /><br/> */}
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