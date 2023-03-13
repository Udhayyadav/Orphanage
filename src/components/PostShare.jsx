import React, {useState, useRef} from 'react'
import '../styles/PostShare.css'
import profile from '../assets/card.jpg'
import {FiVideo} from 'react-icons/fi'
import {BsEmojiSmile, BsImages} from 'react-icons/bs'
import {MdCalendarToday, MdClose} from 'react-icons/md'

const PostShare = () => {

    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className='PostShare'>
        <img src={profile} alt='' />
        <div>
            <input type='text' placeholder="What's happening ?" />
            <div className='Postoptions'>
                <div className='option' onClick={()=>imageRef.current.click()}>
                    <BsImages />
                    Photo
                </div>
                <div className='option'>
                    <FiVideo />
                    Video
                </div>
                <div className='option'>
                    <BsEmojiSmile />
                    Emotion
                </div>
                <div className='option'>
                    <MdCalendarToday/>
                    Schedule
                </div>
                <button className="button ps-button">Share</button>
                <div style={{ display: "none" }}>
                    <input
                    type="file"
                    name="myImage"
                    ref={imageRef}
                    onChange={onImageChange}
                    />
                </div>
            </div>
            {image && (
            <div className="previewImage">
            <MdClose onClick={()=>setImage(null)}/>
            <img src={image.image} alt="" />
            </div>

      )}

        </div>
    </div>
  )
}

export default PostShare