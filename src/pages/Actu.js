import React from 'react'
import Drawer from '../components/Drawer'
import Posts from '../components/Posts'
import '../styles/Actu-layout.css'
import Pub from '../components/Pub'

const Actu = () => {
  return (
    <div className='actu-layout'>
      <Drawer />
      <Posts/>
      <Pub />
    </div>
  )
}

export default Actu