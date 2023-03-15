import React from 'react'
import card from '../assets/card.jpg'
import kid from '../assets/kid.jpg'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/4.jpg'
import Card from '../components/Card'
import '../styles/Card.css'

export const cardList = [
    {
        cover: img2,
        name: 'Orphelinat Saint-Etienne',
        address : 'Bonamoussadi, maison du plombier',
        contact : '+237 67898078',
        place: 'Douala',
        profiles: kid
    },
    {
        cover: img3,
        name: 'Orphelinat Dieu-done',
        address : 'PK13, Pharmacie Goodness',
        contact : '+237 66788078',
        place: 'Douala',
        profiles: img1
    },
    {
        cover: kid,
        name: 'Orphelinat main dans la main',
        address : 'Bonamoussadi, Rondpoint maetur',
        contact : '+237 61598078',
        place: 'Yaounde',
        profiles: img2
    },
    {
        cover: img1,
        name: 'Orphelinat Gracias',
        address : 'Damas, cathedrale de la lumiere',
        contact : '+237 67898078',
        place: 'Yaounde',
        profiles: card
    },
    
]



const CardItem = () => {
  return (
    <div className='content'>
        <div className='head'>
            <label>
                Trier
                <select name='trie'>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
            </label>
            <label>
                Nom
                <select name='trie'>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
            </label>
            <label>
                Region
                <select name='trie'>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
            </label>
            <label>
                Ville
                <select name='trie'>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
            </label>
            <label>
                Enfants
                <select name='trie'>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
            </label>
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