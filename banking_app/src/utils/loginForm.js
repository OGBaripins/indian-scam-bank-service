import React from 'react'
import { Link } from 'react-router-dom'
const loginForm = () => {
  return (
    <form className='formBox z4'>
          <h4 className='p0t p1b titleText z4' style={{color:'#FFFFFF',paddingTop:0}}>Authentication</h4>
        <label className='formlabelBox z4'>
            <h4 className='label z4'>AccountId</h4>
            <input type="text" className='inputBox z4'/>
        </label>
        <label className='formlabelBox z4'>
            <h4 className='label z4'>Password</h4>
            <input type="text" className='inputBox z4'/>
        </label>
        <Link to="/" className='submit z4'>
            <h4 className='submitText z4'>Login</h4>
        </Link>
    </form>
  )
}

export default loginForm