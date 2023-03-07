import React from 'react'
import '../styles/Drawer.css'
import {FiHeart, FiShare} from 'react-icons/fi'
import {BiComment} from 'react-icons/bi'

const Posted = ({pic, name, time, info}) => {
  return (
    <>
     <div className='post-info'>
        <div className='header'>
            <img src={pic} alt=''/>
            <div className='post-text'>
                <div className='post-text-head'>
                    <h2>{name}</h2>
                    <p>{time}</p>
                </div>
                <p>{info}</p>
            </div>
        </div>
        <div className='legend'>
            <p>This couple visited us today ...</p>
        </div>
        <div className='post-media'>
            <img src={pic} alt='' />
        </div>
        <div className='impressions'>
            <p><span className='like'><FiHeart /></span> Like</p>
            <p><span className='comment'><BiComment/></span> Comment</p>
            <p><span className='share'><FiShare/></span> Share</p>
        </div>
     </div>
    </>
  )
}

export default Posted