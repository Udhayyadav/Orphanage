import React from 'react'
import Drawer from '../components/Drawer'
import PostSide from '../components/PostSide'
import '../styles/Actu-layout.css'
import Pub from '../components/Pub'

const Actu = () => {
  return (
    <div className='actu-layout'>
      <Drawer />
      <PostSide/>
      <Pub />
    </div>
  )
}

export default Actu