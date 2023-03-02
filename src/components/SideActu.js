import React from 'react'

const SideActu = ({image, name, info, time}) => {
  return (
    <div className='actuality'>
      <div className ='actu-wrap'>
        <div className='actu-image' >
            <img src={image} alt=''/>
        </div>
        <div className='actu-rest'>
            <div className='first-text'>
                <span className='one'>{name}</span>
                <span className='two'>{time}</span>
            </div>
            <div className='three'><span >{info}</span></div>
        </div>
    </div>
    </div>
    
  )
}

export default SideActu