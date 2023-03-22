import React from 'react'
import '../styles/Pub.css'
import TrendCard from './TrendCard'
import { useNavigate } from 'react-router-dom'
import {AiFillHome, AiFillBell, AiOutlineComment, AiTwotoneSetting} from 'react-icons/ai'

const Pub = () => { 
  const navigate = useNavigate()

  const myProfile = () => {
    navigate("/myprofile")
  }

  const dashboard = () =>{
    navigate('/dashboard')
  }
  return (
    <div className='pub'>
      <div className='navIcons'>
        <AiFillHome onClick={myProfile} />
        <AiTwotoneSetting onClick={dashboard} />
        <AiFillBell />
        <AiOutlineComment />
      </div>

      <TrendCard/>

      <button className='button r-button' >Give</button>
      <TrendCard />
    </div>
  )
}

export default Pub