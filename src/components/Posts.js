import React from 'react'
import '../styles/Posts.css'
import {SideList} from '../datas/SideItem'
import Posted from './Posted'

const Posts = () => {
  return (
    <div className='Posts'>
        {SideList.map((post, id)=>{
          return <Posted data={post} id={id} />
        })}
    </div>
  )
}

export default Posts