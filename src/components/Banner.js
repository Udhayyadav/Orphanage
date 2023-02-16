import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Banner.css'
import { Outlet } from 'react-router-dom'

const Banner = () => {
  return (
    <>
    <div className='banner'>
        
        <nav>
            <Link className='link' to='/home'> Accueil </Link>
            <Link className='link' to='/actu'> Actualites</Link>
            <Link className='link' to='/orphanages'> Orphelinats </Link>
     
        </nav>
    </div>
         <Outlet />
    </>
  )
}

export default Banner