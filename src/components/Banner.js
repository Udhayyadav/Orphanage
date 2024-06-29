import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Banner.css'
import { Outlet } from 'react-router-dom'
import {HiMenu} from 'react-icons/hi'
import { useState } from 'react'
import SignUp from '../pages/SignUp'
import Connexion from '../pages/Connexion'
// import logo from '../assets/logo1.png'

const Banner = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const [isModalOpen, setIsModalOpen] =useState(false)
  const [isModalOpenCon, setIsModalOpenCon] =useState(false)

  return (
    <>
      <nav className='banner'>
        <a href='/' className='brand-name'>Asha Kuteer Foundation</a>
        {/* <img src={logo} alt='' /> */}
        <button className='hamburger' onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}><HiMenu/></button>
        <div className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }>
          <div className='ul'>
            <Link className='link' to='/'> Welcome </Link>
            <Link className='link' to='/actu'> News</Link>
            <Link className='link' to='/orphanages'> Orphanages </Link>
            <Link className='link' to='/about'>About Us </Link>
            <Link className='link' to='/contact'> Contact </Link>
          </div>           
          <button onClick={() => setIsModalOpenCon(true)}  className='con'><Link className='con-btn link'>Login</Link></button> 
          <button onClick={() => setIsModalOpen(true)}  className='insc'> <Link className='insc-btn link' >Sign Up</Link></button>
        </div>
      </nav>
      <SignUp open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Connexion openCon={isModalOpenCon} onCloseCon={() => setIsModalOpenCon(false)} />
      <Outlet />
      </>
  )
}

export default Banner