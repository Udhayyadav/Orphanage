import React from 'react'
import LogoSearch from './LogoSearch'
import ProfileCard from './ProfileCard'
import FollowersCard from './FollowersCard'

const Drawer = () => {
  return (
    <div className='drawer-wrapper'>
      <LogoSearch />
      <ProfileCard/>
      <FollowersCard />
    </div>
  )
}

export default Drawer