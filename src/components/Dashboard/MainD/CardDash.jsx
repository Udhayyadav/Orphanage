import React from 'react'
import CardContent from './CardContent'
import { CardDashData } from '../../../datas/CardDashData'
import '../../../styles/Dashboard/CardDash.css'

const CardDash = () => {
  return (
    <div className='CardDash'>
        {CardDashData.map((card, id) => {
            return(
                <div className='parentContainer' key={id}>
                    <CardContent 
                    title={card.title}
                    color={card.color}
                    barValue={card.barValue}
                    value={card.value}
                    png={card.png}
                    series={card.series}
                    />
                </div>
            );
        })}
    </div>
  )
}

export default CardDash