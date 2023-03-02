import React from 'react'
import flower from '../assets/flower.jpg'
import SideActu from '../components/SideActu'
import { Link } from 'react-router-dom'

export const SideList = [
    {
        cover: flower,
        nom : "Sacred Heart",
        time : "12h",
        type : "Alert"
    },
    {
        cover: flower,
        nom : "Sacred Heart",
        time : "12h",
        type : "Alert"
    },
    {
        cover: flower,
        nom : "Sacred Heart",
        time : "12h",
        type : "Alert"
    },
    {
        cover: flower,
        nom : "Sacred Heart",
        time : "12h",
        type : "Alert"
    },
    {
        cover: flower,
        nom : "Sacred Heart",
        time : "12h",
        type : "Alert"
    },
]

const SideItem = () => {
  return (
    <div className='side'>
        <div className='actu-head'>
            <h3>Fil d'actualité</h3>
            <Link to='/actu' className='actu-link'>Voir plus...</Link>
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