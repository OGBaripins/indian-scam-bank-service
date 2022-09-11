import React from 'react'

function paymentForm() {
  return (
    <div className='formBox'>
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
            <button className='submit'>
                <h4 className='submitText'>Submit</h4>
            </button>
        </form>
    </div>
  )
}

export default paymentForm