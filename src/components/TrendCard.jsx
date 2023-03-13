import React from 'react'
import ads from '../assets/pub1.png'

const TrendCard = () => {
  return (
    <div style={{
        width: '100%',
        backgroundColor: 'white',
        padding : '1rem'
    }} className='Trendcard'>
        <img src={ads} alt='' style={{objectFit: 'cover',
        width: '100%'}} />
    </div>
  )
}

export default TrendCard