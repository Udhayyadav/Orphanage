import React from 'react'
import {ImSearch} from 'react-icons/im'
// import logo from '../assets/logo.png'
import '../styles/LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className='logosearch'>
      {/* <img src={logo} alt='' /> */}
      <h3>Logo</h3>
      <div className='search'>
        <input type='search' placeholder='#Explore' />
        <div className='search-icon'>
          <ImSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch