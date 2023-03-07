import React from 'react'
import '../styles/SignUp.css'
import {IoMdClose} from 'react-icons/io'
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
  const [type , setType] = useState('');
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
        
      } catch (err) {
        console.log(err)
        console.log(type)
      }
      // navigate("/")
      
    }

   
  return (
    <>
    <div style={overlay_style} />
    <div className='signUp'>
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <button onClick={onClose}><IoMdClose /></button>
          <div className='welcome'>
            <h1 className='contact-header'>SIGNUP FORM</h1>
            <p>Lorem ipsum dolor nchneviuepnivpiuiowjiojewejwm,miodwhiubhcbcuyhbuiewihibcnkocwnwuui</p>
          </div>
            <div className='field'>
              <label >
              Your Firstname:
              <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} />
              </label>
              <label >
              Your Lastame:
              <input type="text" value={lname} required onChange={(e)=> {handleLastnameChange(e)}} /><br />
              </label>
            </div>
            <div className='field'>
              <label>
              Your Email:
              <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} /><br />
              </label>
              <label>
              Your Phone:
              <input type='tel' value={phone} required onChange={(e)=> {handlePhoneChange(e)}} /><br />
              </label>
            </div>
            <div className='field'>
              <label>
              Your Address:
              <input type='text' value={address} required onChange={(e)=> {handleAddressChange(e)}} /><br />
              </label>
              <label>
              Your Password:
              <input type="password" value={password} required onChange={(e)=> {handlePasswordChange(e)}} /><br/>
              </label>
            </div>
            <div className='field'>
              <label>
              Confirm Password:
              <input type="password" value={confPassword} required onChange={(e)=> {handleConfPasswordChange(e)}} /><br/>
              </label>
              <label>
              Type of User:
                  <select value={type}  onChange={(e)=> {handleTypeChange(e)}}>
                    <option value='ORPHANAGE'>ORPHANAGE</option>
                    <option value='DONATOR'>DONATOR</option>
                  </select>
              </label>
            </div>
                {/* <input type="text" value={type} required onChange={(e)=> {handleTypeChange(e)}} /><br/> */}
            <div className='account field' >
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