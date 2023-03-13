import React from 'react'
import '../styles/Post.css'
import {AiOutlineComment, AiOutlineHeart, AiFillHeart, AiOutlineShareAlt} from 'react-icons/ai'

const Posted = ({data}) => {
  return (
    <div className='Post'>
      <img src={data.cover} alt='' />
      <div className='postReact'>
        <div>
          {data.liked? <AiFillHeart style={{color:'rgb(255, 96, 96)'}} /> : <AiOutlineHeart />}
        </div>
        <div><AiOutlineComment /></div>
        <div><AiOutlineShareAlt /></div>
      </div>
      <span style={{
        color: "rgb(97,97,97)",
        fontSize: '1.2rem',
        lineHeight: '1',
      }}>{data.likes} likes</span>

      <div className='detail'>
        <span style={{fontSize: '1.2rem'}}><b>{data.nom}</b></span>
        <span style={{fontSize: '1rem'}}> {data.type}</span>
      </div>
    </div>
  )
}

export default Posted