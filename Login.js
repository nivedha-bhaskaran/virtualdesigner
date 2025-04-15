import React from 'react'
import './Login.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Login = () => {
    const homenavigate = useNavigate();
    // const handleHome = () =>{
    //     homenavigate("/ho")
    // }
    const handleHome = () =>{
        homenavigate("/originalhome")
    }
    const navigate = useNavigate();
    const handleSignup = () =>{
        navigate("/signup")
    }
  return (
    <>
    <div>
        
        <center>
        <div className="bg">
       
       
       <img alt="not" className="gridbox"src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Shades_of_light_blue.png/800px-Shades_of_light_blue.png"></img>
       <div className="centered">
    
        <h1 style={{color:"black",fontFamily:"serif"}}>Welcome to Cosmo!!!</h1>
        < label style={{}} >Username
        <input type="text" className="apply" placeholder="Enetr your name"></input><br></br><br></br>
        </label>
        <label>Password
        <input type="password" className="apply" placeholder="Enetr your password"></input>
        </label>
        <div className='both'>
        <Checkbox style={{marginLeft:"28%"}}{...label} defaultChecked size="large" />
        <p style={{fontSize:"20px",marginRight:"30%"}}>Remember me</p>
        <p style={{fontSize:"20px"}}>Forgot password?</p>
        </div>
        <Button variant="contained" color="success" size="large"  onClick={handleHome}>Login</Button><br></br><br></br>
        <label style={{alignItems:"center",fontSize:"25px",marginRight:"250px"}}>New user?
        <Button variant="contained" color="secondary" size="medium"  onClick={handleSignup}>Sign up</Button>
        </label>
       
        </div>
       
            </div>
        
   
    
        </center>
    </div>
    </>
  )
}

export default Login
