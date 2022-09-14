import React from 'react'
import '../App.css';
import PaymentForm from '../utils/paymentForm';
import { Link } from "react-router-dom";
import anime from '../images/anime.mp4'

let user = {
  "name":"test",
  "surname":"test",
  "amount":"850"
}
const mainForm = () => {
  return (
    <div className='contentBox'>
        <video className='videoBack' autoPlay loop mute>
          <source src={anime} type='video/mp4'/>
        </video>
        <h1 className='titleText z4'>Payment info</h1>
        <PaymentForm user={user}/>
        <div className='accountBox'>
            <h4 className='smallTitle'>LVHABA21381723812</h4>
            <h4 className='infoText'>Name: {user.name}</h4>
            <h4 className='infoText'>Surname: {user.surname}</h4>
            <h4 className='infoText'>Amount: {user.amount}$</h4>
        </div>
    </div>
  )
}

export default mainForm