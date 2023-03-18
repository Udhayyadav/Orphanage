import React from 'react'
import { Modal, useMantineTheme } from "@mantine/core"

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
            <h3>Your info</h3>
            <div>
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
            <div>
          <input
            type="number"
            className="infoInput"
            name="NoChild"
            placeholder="Number of Children"
          />
        </div>

        <div>
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
        <div>
            Profile Image 
            <input type="file" name='profileImg'/>
            Cover Image
            <input type="file" name="coverImg" />
        </div>

        <button className="button infoButton">Update</button>
        </form>
    </Modal>
  )
}

export default ProfileModal