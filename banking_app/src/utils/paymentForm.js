import React, {useEffect, useState } from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
import PopMessage from '../utils/popMessage';
import axios from 'axios';
function paymentForm(props) {
    
    const [IsEnough, setIsEnough] = useState(false)
    const redirectLinkGood = props.goodLink
    const redirectLinkBad = props.badLink
    console.log(props.paymentInfo)
    let userDetails = props.user
    let paymentDetails = props.paymentInfo

    const getCurrentDate = () =>{
        let separator='-'
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}-${month}-${date} 00:00:00`
    }
    console.log(getCurrentDate());

    const [popupOpen, setPopupOpen] = useState(false)
    useEffect(() => {
        if(paymentDetails.amount < userDetails.balance){
            {setIsEnough(true)}
        } else { 
            {setIsEnough(false)}
        }
      },[]);

        const buttonHandler = () => {
            //insert into transactions (transaction_id, account_id, receiver_name, receiver_account_number, amount, details, transaction_date) 
            console.log(`insert into transactions (${userDetails.account_id}, ${paymentDetails.receiverName}, ${paymentDetails.receiverAccountNumber}, ${paymentDetails.amount}, ${paymentDetails.details}, ${getCurrentDate()})`);
            axios.post('http://127.0.0.1:5000/transactions', {
                account_id: userDetails.account_id,
                receiver_name: paymentDetails.receiverName,
                receiver_account_number: paymentDetails.receiverAccountNumber,
                amount: parseFloat(paymentDetails.amount),
                details: paymentDetails.details,
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
                <input type="text" className='inputBox' value={paymentDetails.receiverName} disabled/>
            </label>
            <label className='formlabelBox'>
                <h4 className='label'>Receiver account</h4>
                <input type="text" className='inputBox' value={paymentDetails.receiverAccountNumber} disabled/>
            </label>
            <label className='formlabelBox'>
                <h4 className='label'>Amount</h4>
                <input type="number" className='inputBox' value={paymentDetails.amount} disabled/>
            </label>
            <label className='formlabelBox' >
                <h4 className='label'>Description</h4>
                <input type="text" className='inputBox' value={paymentDetails.details} disabled/>
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
        <PopMessage trigger = {popupOpen} link={IsEnough === true?redirectLinkGood:redirectLinkBad}>
                {IsEnough === true?
                    <h3 className='smallTitle' style={{color:"black"}}>Transaction successful!</h3>: 
                    <h3 className='smallTitle' style={{color:"black"}}>Transaction failed!</h3>}
        </PopMessage>
    </div>
  )
}

export default paymentForm