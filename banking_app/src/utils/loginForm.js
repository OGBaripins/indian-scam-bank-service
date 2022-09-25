import React, {useState} from 'react'
import { Link } from 'react-router-dom'
const loginForm = ({Login, error}) => {
  const [details, setDetails] = useState({number:"",password:""});
    const submitHandler = e =>{
        Login(details,e);
    }
  return (
    <form className='formBox z4'>
          <h4 className='p0t p1b titleText z4' style={{color:'#FFFFFF',paddingTop:0}}>Authentication</h4>
        <label className='formlabelBox z4'>
            <h4 className='label z4'>Social-security Number</h4>
            <input type="text" name="number" className='inputBox z4' onChange={e => setDetails({...details, number: e.target.value})} value={details.number}/>
        </label>
        <label className='formlabelBox z4'>
            <h4 className='label z4'>Password</h4>
            <input className='inputBox z4' type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </label>
        <Link to="/" className='submit z4' onClick={submitHandler}>
            <h4 className='submitText z4'>Login</h4>
        </Link>
    </form>
  )
}

export default loginForm