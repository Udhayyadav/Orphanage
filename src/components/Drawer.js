import React from 'react'
import '../styles/Drawer.css'
import {Link} from 'react-router-dom'
import {IoMdSettings, IoMdPerson} from 'react-icons/io'
import {FaDonate} from 'react-icons/fa'

const Drawer = () => {
  return (
    <div className='drawer-wrapper'>
        <nav>
            <Link className='link' to='' ><span><IoMdPerson /></span>Account</Link>
            <Link className='link' to='' ><span><IoMdSettings /></span>Settings</Link>
            <Link className='link' to='' ><span><FaDonate /></span>Donate</Link>
            <Link className='link' to='' ><span><IoMdPerson /></span>Account</Link>
            <Link className='link' to='' ><span><IoMdSettings /></span>Settings</Link>
            <Link className='link' to='' ><span><FaDonate /></span>Donate</Link>
        </nav>
    </div>
  )
}

export default Drawer