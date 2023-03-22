import React from 'react'
import SideBar from '../components/Dashboard/SideBar'
import MainDash from '../components/Dashboard/MainD/MainDash'

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <div className='AppGlass'>
        <SideBar />
        <MainDash />
        <div></div>
      </div>
    </div>
  )
}

export default Dashboard