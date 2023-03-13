import React from 'react'
import LogoSearch from './LogoSearch'
import FollowesCard from './FollowersCard'
import InfoCard from './InfoCard'

const ProfileLeft = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch />
        <InfoCard />
        <FollowesCard />
    </div>
  )
}

export default ProfileLeft