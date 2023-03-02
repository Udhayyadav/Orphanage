import React from 'react'
import '../styles/footer.css'
import {BsFacebook,BsInstagram } from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='up'>
        <div className='left'>
          <h1>WE CARE</h1>
          <div className='social'>
            <span><BsFacebook/></span>
            <span><AiFillTwitterCircle/></span>
            <span><BsInstagram/></span>
          </div>
          </div>
          <div className='middle'>
            <nav>
              <ul>
                <li>Accueil </li>
                <li>A Propos</li>
                <li>Actualites</li>
                <li>Orphelinat</li>
                <li>Contact</li>

              </ul>
            </nav>
            <h2>WE CARE</h2>
            <p>
              loremv vvkk hpgh f oghdoihgodkfhghoihfohsdgh iohsoighoiehirigopeh gohdf hgpdtgkdjbkmvkldnfklhblkndnfhglkkj
            </p>

          </div>
          <div  className='right'>
            <h1>Newsletter</h1>
            <div className='input'>
              <form>            
                <input type='email' className='' placeholder='want to say something?'></input>
                <button type='submit'> <span><FiSend/></span></button>
              </form>
          </div>

        </div>
      </div>
      <div className='down'>
          <p>Copyright Design by maisoft | s2023 WE CARE All right reserved</p>
      </div>
    </div>
  )
}

export default Footer