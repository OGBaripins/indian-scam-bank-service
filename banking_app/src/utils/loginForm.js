import React from 'react'
import { Link } from 'react-router-dom'
const loginForm = () => {
  return (
    <form className='formBox'>
        <label className='formlabelBox'>
            <h4 className='label'>AccountId</h4>
            <input type="text" className='inputBox'/>
        </label>
        <label className='formlabelBox'>
            <h4 className='label'>Password</h4>
            <input type="text" className='inputBox'/>
        </label>
        <Link to="/" className='submit'>
            <h4 className='submitText'>Login</h4>
        </Link>
    </form>
  )
}

export default loginForm