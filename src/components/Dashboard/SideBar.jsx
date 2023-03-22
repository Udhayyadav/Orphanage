import React, { useState } from 'react'
import '../../styles/Dashboard/SideBar.css'
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { SideBarData } from '../../datas/SideBarData'

const SideBar = () => {

  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }

  return (
    <>
        <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
        </div>
        <motion.div className='SideBar'
        variants={sidebarVariants}
        animate={window.innerWidth<=768?`${expanded}`:''}
        >
            <div className='logo-dash'>
                {/* image goes here */}
                <span>We<span>Care</span></span>
            </div>
            {/* menu */}
            <div className='menu'>
                {SideBarData.map((item, index) => {
                    return(
                        <div className={selected === index ? 'menu-item active' :' menu-item'}
                            key={index}
                            onClick={() => setSelected(index)}
                        >
                            <item.icon />
                            <span>{item.heading}</span>
                        </div>
                    )
                }) }
                {/* signoutIcon */}
                <div className="menu-item">
                    <UilSignOutAlt />
                </div>
            </div>
        </motion.div>
    </>
  )
}

export default SideBar