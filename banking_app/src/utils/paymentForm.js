import React, {useEffect, useState } from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
import PopMessage from '../utils/popMessage';
function paymentForm(props) {
    let user = props
    const [IsEnough, setIsEnough] = useState(false)

    let userDetails = {
        "name": "Joker",
        "amount": 1000,
        "desc": "TESTING"
    }
    let infaNoVeikala = {
        "name": "Joker",
        "account": "LVHABA80085",
        "amount": 500,
        "desc": "Melns trekns dildo turbo 3000"
    }

    const [popupOpen, setPopupOpen] = useState(false)
    useEffect(() => {
        if(infaNoVeikala.amount < userDetails.amount){
            {setIsEnough(true)}
        } else { 
            {setIsEnough(false)}
        }
      },[]);

        const buttonHandler = () => {
            setPopupOpen(true);
        }


    console.log(IsEnough)

  return (
    <div className='formBox z4'>
        <form className='formStyle'>
            
            <label className='formlabelBox'>
                <h4 className='label'>Receiver name</h4>
                <input type="text" className='inputBox' value={infaNoVeikala.name} disabled/>
            </label>
            <label className='formlabelBox'>
                <h4 className='label'>Receiver account</h4>
                <input type="text" className='inputBox' value={infaNoVeikala.account} disabled/>
            </label>
            <label className='formlabelBox'>
                <h4 className='label'>Amount</h4>
                <input type="number" className='inputBox' value={infaNoVeikala.amount} disabled/>
            </label>
            <label className='formlabelBox' >
                <h4 className='label'>Description</h4>
                <input type="text" className='inputBox' value={infaNoVeikala.desc} disabled/>
            </label>
            <motion.button className='submit' 
            type="button"
            onClick={() => {buttonHandler()}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
                <h4 className='submitText'>Submit</h4>
            </motion.button>
<<<<<<< HEAD
            <PopMessage trigger = {isNotEnough}>
=======
            <PopMessage trigger = {popupOpen}>
                <h3 className='smallTitle' style={{color:"black"}}>My pop up</h3>
>>>>>>> 2b52a402af80ac5947d9096fba71e8d02e672540
            </PopMessage>
        </form>
    </div>
  )
}

export default paymentForm