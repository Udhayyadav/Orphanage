import React from 'react'
import { SideList } from './SideItem'
import Posted from '../components/Posted'

const PostItem = () => {
  return (
    <div className='post-item'>
        {SideList.map((profile, index) => (
            <Posted
                key = {`${profile.nom}-${index}`}
                pic = {profile.cover}
                name = {profile.nom}
                info = {profile.type}
                time = {profile.time}
             />
        ))}
    </div>
  )
}

export default PostItem