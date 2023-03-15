import React from 'react'
import card from '../assets/card.jpg'
import kid from '../assets/kid.jpg'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/4.jpg'
import Card from '../components/Card'
import '../styles/Card.css'
import {FiFilter} from 'react-icons/fi'
import {TbMap2} from 'react-icons/tb'

export const cardList = [
    {
        cover: img2,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, ancienne maison du plombier',
        contact : 67898078,
        place: 'Douala',
        profiles: kid
    },
    {
        cover: img3,
        name: 'Orphelinat Dieu-done',
        address : 'PK13, Pharmacie Goodness',
        contact : 66788078,
        place: 'Douala',
        profiles: img1
    },
    {
        cover: kid,
        name: 'Orphelinat main dans la main',
        address : 'Bonamoussadi, Rondpoint maetur',
        contact : 61598078,
        place: 'Yaounde',
        profiles: img2
    },
    {
        cover: img1,
        name: 'Orphelinat Gracias',
        address : 'Damas, cathedrale de la lumiere',
        contact : 67898078,
        place: 'Yaounde',
        profiles: card
    },
    
]



const CardItem = () => {
  return (
    <div className='content'>
        <div className='head'>
            <h1>Orphelinat aux alentours<span><TbMap2 /></span></h1>
            <p>Filtre<span><FiFilter /></span></p>
        </div>
        <div className='card'>
            {cardList.map((profile, index) => (
                <Card
                    key = {`${profile.name}-${index}`}
                    image = {profile.cover}
                    name = {profile.name}
                    add ={profile.address}
                    phone ={profile.contact}
                    place ={profile.place}
                    profiles ={profile.profiles}
                />
            ))}
        </div>
    </div>
  )
}

export default CardItem