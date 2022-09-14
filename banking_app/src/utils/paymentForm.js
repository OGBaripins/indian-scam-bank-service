import React from 'react'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import PopMessage from '../utils/popMessage';
function paymentForm(props) {
    let user = props
    let isNotEnogh = false;
  const checkIfAmount = (user) =>{
    isNotEnogh=true
  }

  return (
    <div className='formBox z4'>
        <form className='formStyle'>

            <label className='formlabelBox'>
                <h4 className='label'>Reciver name</h4>
                <input type="text" className='inputBox'/>
            </label>
            <label className='formlabelBox'>
                <h4 className='label'>Reciver account</h4>
                <input type="text" className='inputBox'/>
            </label>
            <label className='formlabelBox'>
                <h4 className='label'>Amount</h4>
                <input type="number" className='inputBox'/>
            </label>
            <label className='formlabelBox'>
                <h4 className='label'>Description</h4>
                <input type="text" className='inputBox'/>
            </label>
            <motion.button className='submit' 
            onClick={checkIfAmount}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
                <h4 className='submitText'>Submit</h4>
            </motion.button>
            <PopMessage trigger = {isNotEnogh}>
                <h3>My pop up</h3>
            </PopMessage>
        </form>
    </div>
  )
}

export default paymentForm