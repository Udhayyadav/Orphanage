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
      alert('A form was submitted with Name :"' + name +
      '" ," Email :"' + email + '", and Phone :"'+phone+'"');
      e.preventDefault();
 
    }

  return (
    <div className='contact-form'>
      <div className='contact-details'>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor lorem ipsum dolor</p>
        <img src={require('../assets/contact3.png')} style={{
          imageRendering: 'high-quality'
        }} alt=''/>
      </div>
      <form onSubmit={(e) => {handleSubmit(e)}}>
           <h1 className='contact-header'>CONTACT FORM</h1>
            <label >
            Your Name:
            </label>
            <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
            <label>
            Your Email:
            </label>
            <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} /><br/>
            <label>
            Your Phone:
            </label>
            <input type='tel' value={phone} required onChange={(e)=> {handlePhoneChange(e)}} /><br/>
            <label>
            Your Message:
            </label>
            <input type="text" value={message} required onChange={(e)=> {handleMessageChange(e)}} /><br/>
            <input className='submit' type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default ContactForm