import React from 'react'
import card from '../assets/card.jpg'
import kid from '../assets/kid.jpg'
import Card from '../components/Card'
import '../styles/Card.css'
import {FiFilter, FiSend} from 'react-icons/fi'

export const cardList = [
    {
        cover: card,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, ancienne maison du plombier',
        contact : 67898078,
        place: 'Douala',
        profiles: kid
    },
    {
        cover: card,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, ancienne maison du plombier',
        contact : 67898078,
        place: 'Douala',
        profiles: kid
    },
    {
        cover: card,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, ancienne maison du plombier',
        contact : 67898078,
        place: 'Yaounde',
        profiles: kid
    },
    {
        cover: card,
        name: 'Orphelinat Saint-Etienne',
        address : 'Damas, cathedrale de la lumiere',
        contact : 67898078,
        place: 'Douala',
        profiles: kid
    },
    {
        cover: card,
        name: 'Orphelinat Saint-Etienne',
        address : 'Damas, cathedrale de la lumiere',
        contact : 67898078,
        place: 'Yaounde',
        profiles: kid
    },
    {
        cover: card,
        name: 'Orphelinat Saint-Etienne',
        address : 'Damas, cathedrale de la lumiere',
        contact : 67898078,
        place: 'Yaounde',
        profiles: kid
    },
    {
        cover: card,
        name: 'Orphelinat Saint-Etienne',
        address : 'Damas, cathedrale de la lumiere',
        contact : 67898078,
        place: 'Douala',
        profiles: kid
    },

    {
        cover: card,
        name: 'Orphelinat Saint-Etienne',
        address : 'Damas, cathedrale de la lumiere',
        contact : 67898078,
        place: 'Douala',
        profiles: kid
    },

    {
        cover: card,
        name: 'Orphelinat Saint-Etienne',
        address : 'Damas, cathedrale de la lumiere',
        contact : 67898078,
        place: 'Douala',
        profiles: kid
    }
]



const CardItem = () => {
  return (
    <div className='content'>
        <div className='head'>
            <h1>Orphelinat aux alentours<span><FiSend /></span></h1>
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