import React from 'react'
import '../styles/Drawer.css'
import {FiSearch} from 'react-icons/fi'

const Pub = () => {
  return (
    <div className='pub'>
        <div className='search-bar'>
            <input type='search' placeholder='Search' /><span><FiSearch /></span>
        </div>
        <div className='pub-list'>
            {/* <img src={require('../assets/kid.jpg')} alt=''  /> */}
            <video controls width='100%'>
                <source src={require('https://pin.it/1liBFUZ')} type='video/mp4' />
                sorry, your browser doesn't support embedded videos.
            </video>
        </div>

    </div>
  )
}

export default Pub