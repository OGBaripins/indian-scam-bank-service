import React from 'react'
import '../App.css';
import PaymentForm from '../utils/paymentForm';
import { Link } from "react-router-dom";
import anime from '../images/anime.mp4';
import { useLocation } from 'react-router-dom';

let user;
const mainForm = () => {
  const location = useLocation();
  user = location.state.user.user;
  paymentInfo = location.state.paymentInfo.paymentInfo
  goodLink = location.state.goodLink.goodLink
  badLink = location.state.badLink.badLink
  console.log(location);
  return (
    <div className='contentBox'>
        <video className='videoBack' autoPlay loop mute>
          <source src={anime} type='video/mp4'/>
        </video>
        <h1 className='titleText z4'>Payment info</h1>
        <PaymentForm user={user} paymentInfo={paymentInfo} goodLink={goodLink} badLink={badLink} />
        <div className='accountBox'>
            <h4 className='smallTitle'>LVHABA21381723812</h4>
            <h4 className='infoText'>Name: {user.first_name}</h4>
            <h4 className='infoText'>Surname: {user.last_name}</h4>
            <h4 className='infoText'>Balance: {user.balance}$</h4>
        </div>
    </div>
  )
}

export default mainForm