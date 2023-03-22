import React from 'react'
import CardDash from './CardDash'
import RequestTable from './Table'
import '../../../styles/Dashboard/MainDash.css'

const MainDash = () => {
  return (
    <div className='MainDash'>
        <h1>Dashboard</h1>
        <CardDash />
        <RequestTable />
    </div>
  )
}

export default MainDash