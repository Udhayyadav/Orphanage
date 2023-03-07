import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Drawer.css'
import {HiPencil} from 'react-icons/hi'
import {MdOutlineInsertPhoto} from 'react-icons/md'
import PostItem from '../datas/PostItem'

const Posts = () => {
  return (
    <div className='post-wrapper'>
        <div className='create-post'>
            <Link className='link'><span><HiPencil /></span>Write Something</Link>
            <Link className='link'><span><MdOutlineInsertPhoto /></span>Publish Media</Link>
            <Link className='link'><span><MdOutlineInsertPhoto /></span>Publish Media</Link>
        </div>
        <div className='posts'>
           <PostItem />
        </div>
    </div>
  )
}

export default Posts