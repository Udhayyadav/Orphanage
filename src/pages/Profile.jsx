import React from 'react'
import ProfileLeft from '../components/ProfileLeft'
import ProfileCard from '../components/ProfileCard'
import PostSide from '../components/PostSide'
import Pub from '../components/Pub'

const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft />
      <div className='ProfileCenter'>
        <ProfileCard />
        <PostSide />
      </div>
      <Pub />
    </div>
  )
}

export default Profile