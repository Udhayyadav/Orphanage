import React from 'react'
// import card from '../assets/card.jpg'
import '../styles/Card.css'
import {TiLocation} from 'react-icons/ti'
// import {GrLocation} from 'react-icons/gr'
import {FiPhoneCall} from 'react-icons/fi'
import {VscLocation} from 'react-icons/vsc'


const Card = ({image, name, add, phone, place, profiles}) => {
  return (
    <div className='card-wrap'>
      <img className='card-image' src ={image} alt= 'Orphelinat '/>
      <button className='btn_option' ><span className='location icon'><TiLocation /></span>{place}</button>
      <span className='name'>{name}</span>
      <div className='address'><span className='icon'><VscLocation /></span>{add}</div> 
      <div className='phone'>
        <div>
          <span className='call icon'><FiPhoneCall /></span>
          <span className='phone-num'>{phone}</span>
        </div>
        <img className='profile-image' src ={profiles} alt= 'Orphelinat '/>
        </div> 
    </div>
  )
}

export default Card