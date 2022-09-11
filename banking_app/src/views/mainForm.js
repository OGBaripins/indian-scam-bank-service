import React from 'react'
import '../App.css';
import PaymentForm from '../utils/paymentForm';
import { Link } from "react-router-dom";

const mainForm = () => {
  return (
    <div className='contentBox'>
        <h1 className='titleText'>Payment info</h1>
        <PaymentForm/>
        <div className='accountBox'>
            <h4 className='smallTitle'>LVHABA21381723812</h4>
            <h4 className='infoText'>Name: test</h4>
            <h4 className='infoText'>Surname: test</h4>
            <h4 className='infoText'>Amount: 850$</h4>
          </div>
    </div>
  )
}

export default mainForm