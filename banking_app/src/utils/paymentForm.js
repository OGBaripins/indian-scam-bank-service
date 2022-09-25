import React, {useEffect, useState } from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
import PopMessage from '../utils/popMessage';
import jsonData from './data.json';
function paymentForm(props) {
    let user = props
    const [isNotEnough, setIsNotEnough] = useState(false)

  return (
    <div className='formBox z4'>
        <form className='formStyle'>
            
            <label className='formlabelBox'>
                <h4 className='label'>Reciver name</h4>
                <input type="text" className='inputBox' value={jsonData.name} disabled/>
            </label>
            <label className='formlabelBox'>
                <h4 className='label'>Reciver account</h4>
                <input type="text" className='inputBox' value={jsonData.account} disabled/>
            </label>
            <label className='formlabelBox'>
                <h4 className='label'>Amount</h4>
                <input type="number" className='inputBox' value={jsonData.amount} disabled/>
            </label>
            <label className='formlabelBox' >
                <h4 className='label'>Description</h4>
                <input type="text" className='inputBox' value={jsonData.desc} disabled/>
            </label>
            <motion.button className='submit' 
            type="button"
            onClick={() => {setIsNotEnough(true)}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
                <h4 className='submitText'>Submit</h4>
            </motion.button>
            <PopMessage trigger = {isNotEnough}>
            </PopMessage>
        </form>
    </div>
  )
}

export default paymentForm