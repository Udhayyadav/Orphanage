import React from 'react'
import '../styles/SignUp.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
    const [type , setType] = useState('');

    const handleChange =(e)=>{
      setName(e.target.value);
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

    const handleSubmit=(e)=>{
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
 
    }

  return (
    <div className='signUp'>
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <h1 className='contact-header'>SIGNUP FORM</h1>
            <label >
            Your Name:
            </label><br/>
            <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
            <label>
            Your Email:
            </label><br/>
            <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} /><br/>
            <label>
            Your Phone:
            </label><br/>
            <input type='tel' value={phone} required onChange={(e)=> {handlePhoneChange(e)}} /><br/>
            <label>
            Your Password:
            </label><br/>
            <input type="password" value={password} required onChange={(e)=> {handlePasswordChange(e)}} /><br/>
            <label>
            Confirm Password:
            </label><br/>
            <input type="password" value={confPassword} required onChange={(e)=> {handleConfPasswordChange(e)}} /><br/>
            <label>
            Type of User:
                <select value={type} onChange={(e)=> {handleTypeChange(e)}}>
                  <option>Orphanage</option>
                  <option selected='selected'>Donator</option>
                </select>
            </label><br/>
            <div className='account' >
                <input className='submit' type="submit" value="Submit"/>
                <div className='already-account'>
                    <h2>Already have an account ?</h2>
                    <Link className='link'>Login</Link>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SignUp