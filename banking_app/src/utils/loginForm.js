import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoginError from './loginError';

const loginForm = ({paymentInfo, goodLink, badLink}) => {

  const navigate = useNavigate();
  let user;

  const [details, setDetails] = useState({number:"",password:""});
  const [isOpen, setIsOpen] = useState(false);
  
  const submitHandler = (e) =>{
    e.preventDefault();
  axios({
    method: "get",
    url: `http://127.0.0.1:5000/validation/${details.number}/${details.password}`,
  })
    .then(function (response) {
      if(details.number == response.data[0].social_security_number){
        user = response.data[0];
        navigate('/',{
          state: {
            user: {user},
            paymentInfo: {paymentInfo}, 
            goodLink: {goodLink}, 
            badLink: {badLink}
          }
        })
      }
    })
    .catch(function (response) {
      setIsOpen(true)
      setTimeout(() => {
        setIsOpen(false);
        }, 5000);
    });
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
        <LoginError trigger = {isOpen} isRunning={true}>
          <h3 className='smallTitle' style={{color:"white"}}>Wrong Social-security Number/password</h3>
        </LoginError>
    </form>
  )
}

export default loginForm