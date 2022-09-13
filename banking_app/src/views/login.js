import React from 'react'
import LoginForm from '../utils/loginForm'
import anime from '../images/anime.mp4'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
function login() {
  return (
    <motion.div className='contentBox'
    key = "form"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.5,duration:1.5,eas:"easeOut"}}
    exit={{y:-250,opacity:0}}
    >
        <video className='videoBack' autoPlay loop mute>
          <source src={anime} type='video/mp4'/>
        </video>
        <h1 className='titleText z4' style={{paddingBottom: 6}}>WELCOME TO</h1>
        <h1 className='titleText z4' style={{color:'#ffb133',fontSize:50,paddingTop:6}}>I S B S</h1>
        <LoginForm />

    </motion.div>
  )
}

export default login