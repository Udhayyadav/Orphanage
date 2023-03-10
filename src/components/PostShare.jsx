import React, {useState, useRef} from 'react'
import '../styles/PostShare.css'
import profile from '../assets/card.jpg'
import {FaImages, FaVideo} from 'react-icons/fa'
import {BsEmojiLaughingFill} from 'react-icons/bs'
import {MdSchedule, MdClose} from 'react-icons/md'

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
                <div style={{color: 'indigo'}} className='option' onClick={()=>imageRef.current.click()}>
                    <FaImages />
                    Photo
                </div>
                <div style={{color: 'green'}} className='option'>
                    <FaVideo />
                    Video
                </div>
                <div style={{color: 'yellow'}} className='option'>
                    <BsEmojiLaughingFill />
                    Emotion
                </div>
                <div style={{color: 'blue'}} className='option'>
                    <MdSchedule />
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