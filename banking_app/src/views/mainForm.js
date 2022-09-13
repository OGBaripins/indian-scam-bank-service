import React from 'react'
import '../App.css';
import PaymentForm from '../utils/paymentForm';
import { Link } from "react-router-dom";
import anime from '../images/anime.mp4'


const mainForm = () => {
  return (
    <div className='contentBox'>
        <video className='videoBack' autoPlay loop mute>
          <source src={anime} type='video/mp4'/>
        </video>
        <h1 className='titleText z4'>Payment info</h1>
        <PaymentForm/>
        <div className='accountBox z4'>
            <h4 className='smallTitle z4'>LVHABA21381723812</h4>
            <h4 className='infoText z4'>Name: test</h4>
            <h4 className='infoText z4'>Surname: test</h4>
            <h4 className='infoText z4'>Amount: 850$</h4>
          </div>
    </div>
  )
}

export default mainForm