import React from 'react'
import {Link} from 'react-router-dom'
import {HiPencil} from 'react-icons/hi'
import {MdOutlineInsertPhoto} from 'react-icons/md'

const Posts = () => {
  return (
    <div className='post-wrapper'>
        <div className='create-post'>
            <Link className='link'><span><HiPencil /></span>Write Something</Link>
            <Link className='link'><span><MdOutlineInsertPhoto /></span>Publish Media</Link>
            <Link className='link'><span><MdOutlineInsertPhoto /></span>Publish Media</Link>
        </div>
        <div className='posts'>
        </div>
    </div>
  )
}

export default Posts