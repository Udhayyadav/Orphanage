import React, {useState} from 'react'
import ProfileModal from './ProfileModal'
import {BsPencilSquare} from 'react-icons/bs'

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className='InfoCard'>
        <div className='InfoHead'>
            <h4>Your Info</h4>
            <div>
                <BsPencilSquare
                    fontSize='2.5rem'
                    onClick={() => setModalOpened(true)}
                 />
                <ProfileModal
                    modalOpened={modalOpened}
                    setModalOpened={setModalOpened} />

            </div>
            <div className="info">
        <span>
          <b>Number of Children </b>
        </span>
        <span>206</span>
      </div>

      <div className="info">
        <span>
          <b>Location </b>
        </span>
        <span>Town</span>
      </div>

      <div className="info">
        <span>
          <b>City </b>
        </span>
        <span>Garoua</span>
      </div>

      <button className="button logout-button">Logout</button>
        </div>
    </div>
  )
}

export default InfoCard