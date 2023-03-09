import React from 'react'
import '../styles/Card.css'
import {TiLocation} from 'react-icons/ti'
import {MdCall} from 'react-icons/md'
import {VscLocation} from 'react-icons/vsc'


const Card = ({image, name, add, phone, place, profiles}) => {
  return (
    <div className='card-wrap'>
      <img className='card-image' src ={image} alt= 'Orphelinat '/>
      <button className='btn_option' ><span className='location icon'><TiLocation /></span>{place}</button>
      <span className='name'>{name}</span>
      <div className='address'>
        <div className='add-left'>
          <div className='add-location'>
            <span className='icon'><VscLocation /></span>{add}
          </div> 
          <div className='add-call'>
            <span className='call icon'><MdCall /></span>{phone}
          </div>
        </div>
          <div className='add-right'>
            <img className='profile-image' src ={profiles} alt= 'Orphelinat '/>
          </div> 
      </div> 
    </div>
  )
}

export default Card