import React from 'react'
import Slides from '../components/Slides'
import Layout from '../components/Layout'
import images from '../datas/DataSlide'

const Home = () => {
  return (
    <div className='home'>
      <Slides images={images}  />
      <Layout />
     
    </div>
  )
}

export default Home