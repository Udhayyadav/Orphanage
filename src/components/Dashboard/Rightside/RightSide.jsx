import React from 'react'
import UsersReview from './UsersReview'
import '../../../styles/Dashboard/RightSide.css'
import SideItem from '../../../datas/SideItem'

const RightSide = () => {
  return (
    <div className='RightSide'>
        <div>
            <SideItem />
        </div>
        <div>
            <h3>User Reviews</h3>
            <UsersReview />
        </div>
    </div>
  )
}

export default RightSide