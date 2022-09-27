import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const loginForm = ({paymentInfo, goodLink, badLink}) => {

  const navigate = useNavigate();

  const adminUser = {
    number: "010101-11111",
    password: "password1"
  }

  const [user, setUser] = useState({number:""});
  const [error, setError] = useState("");
  const [details, setDetails] = useState({number:"",password:""});

  const submitHandler = (e) =>{
    axios.get(`http://127.0.0.1:5000/validation/${details.number}/${details.password}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    if(details.number == adminUser.number && details.password == adminUser.password){
      setUser({number: details.number});
      console.log(user);
      navigate("/");
      setError("");
    }else{
      e.preventDefault();
      setError("Details do not match");
    }
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
        <button className='submit z4' onClick={submitHandler} paymentInfo={paymentInfo} goodLink={goodLink} badLink={badLink} user={user}>
            <h4 className='submitText z4'>Login</h4>
        </button>
    </form>
  )
}

export default loginForm