import React from 'react'
import { Modal, useMantineTheme } from "@mantine/core"
import '../styles/ProfileModal.css'

const ProfileModal = ({modalOpened, setModalOpened}) => {
    const theme = useMantineTheme();

  return (
    <Modal
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        size="55%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
    >
        <form className='infoForm'>
          <h3 contact-header>Your info</h3>
          <div className='field'>
                <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
          />

          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
          />
          </div>
          <div className='field single'>
          <input
            type="number"
            className="infoInput"
            name="NoChild"
            placeholder="Number of Children"
          />
          </div>

          <div className='field'>
          <input
            type="text"
            className="infoInput"
            name="livesIN"
            placeholder="Location"
          />

          <input
            type="text"
            className="infoInput"
            name="City"
            placeholder="City"
          />
          </div>
          <div className='field'>
            <div className='upload'>
              <p>
              Profile Image 
              </p>
              <input type="file" name='profileImg'/>
            </div>
            <div className='upload'>
              <p>
              Cover Image
              </p>
              <input type="file" name="coverImg" />
            </div>
          </div>

        <button className="button infoButton">Update</button>
        </form>
    </Modal>
  )
}

export default ProfileModal