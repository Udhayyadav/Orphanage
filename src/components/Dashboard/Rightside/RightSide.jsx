import React from 'react'
import UsersReview from './UsersReview'
import SideActu from '../../SideActu'
import '../../../styles/Dashboard/RightSide.css'

const RightSide = () => {
  return (
    <div className='RightSide'>
        <div>
            <h3>Actualities</h3>
            <SideActu />
        </div>
        <div>
            <h3>User Reviews</h3>
            <UsersReview />
        </div>
    </div>
  )
}

export default RightSide