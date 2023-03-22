import React from 'react'
import SideBar from '../components/Dashboard/SideBar'
import MainDash from '../components/Dashboard/MainD/MainDash'
import RightSide from '../components/Dashboard/Rightside/RightSide'

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <div className='AppGlass'>
        <SideBar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  )
}

export default Dashboard