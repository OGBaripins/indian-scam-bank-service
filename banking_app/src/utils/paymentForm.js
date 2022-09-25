import React, {useEffect, useState } from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
import PopMessage from '../utils/popMessage';
import axios from 'axios';
function paymentForm(props) {
    let user = props
    const [IsEnough, setIsEnough] = useState(false)
    const redirectLinkGood = 'https://www.youtube.com/watch?v=_M52zaVv-8Y&ab_channel=wrktm'
    const redirectLinkBad = 'https://www.youtube.com/watch?v=4Jui6Prje6o&ab_channel=MemesOutOfMyWorld'

    let userDetails = {
        "name": "Joker",
        "amount": 1000,
        "desc": "TESTING"
    }
    let infaNoVeikala = {
        "name": "Joker",
        "account": "LVHABA80085",
        "amount": 200,
        "desc": "Melns trekns dildo turbo 3000"
    }

    const getCurrentDate = () =>{
        let separator=''
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
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
            axios.post('/user', {
                account_id: userDetails.id,
                amount: infaNoVeikala.amount,
                receiver_account_number: infaNoVeikala.account,
                receiver_name: infaNoVeikala.name,
                details: infaNoVeikala.desc,
                transaction_date: getCurrentDate()
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                setIsEnough(false)
                console.log(error);
              });
              setPopupOpen(true);
        }

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
        </form>
        <PopMessage trigger = {popupOpen} link={IsEnough == true?redirectLinkGood:redirectLinkBad}>
                {IsEnough == true?
                    <h3 className='smallTitle' style={{color:"black"}}>Transaction successful!</h3>: 
                    <h3 className='smallTitle' style={{color:"black"}}>Transaction failed!</h3>}
        </PopMessage>
    </div>
  )
}

export default paymentForm