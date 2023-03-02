import React from 'react'
import '../styles/ContactForm.css'
import { useState } from 'react'

const ContactForm = () => {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [message , setMessage] = useState('');
    // const [type , setType] = useState('');

    const handleChange =(e)=>{
      setName(e.target.value);
    }
    // function to update state of email with value
    // enter by user in form
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
      // function to update state of password with
      // value enter by user in form
    const handlePhoneChange =(e)=>{
      setPhone(e.target.value);
    }
      // function to update state of confirm password
      // with value enter by user in form
    const handleMessageChange =(e)=>{
      setMessage(e.target.value);
    }

    // const handleTypeChange =(e)=>{
    //   setType(e.target.value);
    // }

    const handleSubmit=(e)=>{
      // if(password!==confPassword)
      // {
      //   // if 'password' and 'confirm password'
      //   // does not match.
      //   alert("password Not Match");
      // }
      // else{
      //   // display alert box with user
      //   // 'name' and 'email' details .
      // }
      alert('A form was submitted with Name :"' + name +
      '" ," Email :"' + email + '", and Phone :"'+phone+'"');
      e.preventDefault();
 
    }

  return (
    <div className='contact-form'>
      <div className='contact-details'>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor lorem ipsum dolor</p>
        <img src={require('../assets/contact3.png')} height='600px' width='700px' style={{
          imageRendering: 'high-quality'
        }} alt=''/>
      </div>
      <form onSubmit={(e) => {handleSubmit(e)}}>
           <h1 className='contact-header'>CONTACT FORM</h1>
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
            Your Message:
            </label><br/>
            <input type="text" value={message} required onChange={(e)=> {handleMessageChange(e)}} /><br/>
            {/* <label>
            Type of User:
                <select value={type} required onChange={(e)=> {handleTypeChange(e)}}>
                  <option>Orphanage</option>
                  <option>Donator</option>
                </select>
            </label><br/> */}
            {/* <input type="password"   /><br/> */}
            <input className='submit' type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default ContactForm