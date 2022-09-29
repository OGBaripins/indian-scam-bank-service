import React from 'react'
import LoginForm from '../utils/loginForm'
import anime from '../images/anime.mp4'
import {motion} from 'framer-motion/dist/framer-motion'
function login() {
  const paymentInfo = {
    receiverName: "",
    receiverAccountNumber: "",
    amount: "",
    details: ""
  }

  const queryParams = new URLSearchParams(window.location.search);

  paymentInfo.receiverName = queryParams.get('accountName').replace("%"," ");
  paymentInfo.receiverAccountNumber = queryParams.get('accountNumber');
  paymentInfo.amount = queryParams.get('amount');
  paymentInfo.details = queryParams.get('details').replace("%"," ");

  const goodLink = queryParams.get('goodLink');
  const badLink = queryParams.get('badLink');
  
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
        <h1 className='titleText z4' style={{paddingBottom: "3%"}}>WELCOME TO</h1>
        <h1 className='titleText z4' style={{color:'#ffb133',fontSize:50,paddingBottom: "6%",paddingTop:"1%"}}>I S B S</h1>
        
        <LoginForm paymentInfo={paymentInfo} goodLink={goodLink} badLink={badLink}/>

    </motion.div>
  )
}

export default login