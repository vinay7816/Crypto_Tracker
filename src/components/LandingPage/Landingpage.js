import React from 'react'
import "./Landingpage.css"
import Button from '../Common/Butoon/Button'
import iphone from"../../Assets/iphone.png"
import gradient from "../../Assets/gradient.png"
import {motion} from "framer-motion"
import { Link, useNavigate } from 'react-router-dom'
const Landingpage = () => {
  const navigate=useNavigate();
  const handleclick=(e)=>{
     navigate("/dashboard")
  }
  return (
    <div className='Land-flex'>
      <div className='Land-content'>
        <motion.h1 className='track-crypto'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}>
            Track Crypto
        </motion.h1>
        <motion.h1 className='realtime' initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}>Real Time</motion.h1>
        <motion.p className='info' initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.25, duration: 1 }}>Track crypto through a public api in real time.Visit the dashboard to do so !</motion.p>
        <motion.div className='btn-flex'
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 1.25, duration: 0.75 }}>
        <Button text={"Dashboard"} onClick={handleclick}/>
        <Button text={"Share"} outlined={true}/>
      </motion.div>
      </div>
      
  
      <div className='Land-image'>
        <motion.img src={iphone} className='iphone'
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,}}/>
        <img src={gradient} className='gradient'/>
      </div>
    </div>
  )
}

export default Landingpage
