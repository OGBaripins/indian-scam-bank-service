import React from 'react'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
function paymentForm() {
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
                <h4 className='submitText'>Submit</h4>
            </motion.button>
        </form>
    </div>
  )
}

export default paymentForm