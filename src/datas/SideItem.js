import React from 'react'
import flower from '../assets/2.jpg'
import img1 from '../assets/1.jpg'
import img2 from '../assets/4.jpg'
import img3 from '../assets/card.jpg'
import SideActu from '../components/SideActu'
import { Link } from 'react-router-dom'

export const SideList = [
    {
        cover: img1,
        nom : "Sacred Heart",
        time : "12h",
        type : "Cas de maladie",
        likes: 200,
        liked: false
    },
    {
        cover: img2,
        nom : "Main dans la main",
        time : "20h",
        type : "Messe d'action de grace",
        likes: 100,
        liked: true
    },
    {
        cover: flower,
        nom : "Saint Victor",
        time : "1 jour",
        type : "cas de maladie",
        likes: 50,
        liked: false
    },
    {
        cover: img3,
        nom : "God's love",
        time : "2jours",
        type : "Reception du materiel",
        likes: 3,
        liked: true
    },
]

const SideItem = () => {
  return (
    <div className='side'>
        <div className='actu-head'>
            <h3>News</h3>
            <Link to='/actu' className='actu-link'>see more...</Link>
        </div>
        {SideList.map((profile, index) => (
            <SideActu
                key = {`${profile.nom}-${index}`}
                image = {profile.cover}
                name = {profile.nom}
                info = {profile.type}
                time = {profile.time}
             />
        ))}
    </div>
  )
}

export default SideItem