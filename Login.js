]// import React, {useState} from 'react'
// import './Login.css'
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';

// import Checkbox from '@mui/material/Checkbox';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// const Login = () => {

//     const homenavigate = useNavigate();
   
//     const handleHome = () =>{
//         homenavigate("/originalhome")
//     }
//     const navigate = useNavigate();
//     const handleSignup = () =>{
//         navigate("/signup")
//     };
 
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [usererror, setUserError] = useState(false);
//   const [passworderror, setPasswordError] = useState(false);
 
//   const handleUser = (e) => {
//     setUsername(e.target.value);
//     setUserError(false); // Reset error when user starts typing
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setPasswordError(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (username === "" || password === "") {
//       alert("Input fields cannot be empty!!!");
//       return;
//     }

//     let isValid = true;

//     if (username.length < 6) {
//       setUserError(true);
//       isValid = false;
//     }

//     if (password.length < 9) {
//       setPasswordError(true);
//       isValid = false;
//     }


//     if (isValid) {
//       alert("Login Successful!");
//       // Proceed with authentication logic (e.g., API call)
//     }
    
// }
//   return (
//     <>
//     <div>
        
//         <center>
//         <div className="bg">
       
       
//        <img alt="not" className="gridbox"src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Shades_of_light_blue.png/800px-Shades_of_light_blue.png"></img>
//        <div className="centered">
    
//         <h1 style={{color:"black",fontFamily:"serif"}}>Welcome to Cosmo!!!</h1>
//         < label style={{}} >Username
//         <input type="text" className="apply" placeholder="Enetr your name"></input><br></br><br></br>
//         <br />
//           {usererror && <p style={{ color: "red" }}>Username must be at least 6 characters</p>}
//         </label>
//         <label>Password
//         <input type="password" className="apply" placeholder="Enter your password"></input>
//         <br />
//           {passworderror && <p style={{ color: "red" }}>Password must be at least 9 characters</p>}
//         </label>
//         <div className='both'>
//         <Checkbox style={{marginLeft:"28%"}}{...label} defaultChecked size="large" />
//         <p style={{fontSize:"20px",marginRight:"30%"}}>Remember me</p>
//         <p style={{fontSize:"20px"}}>Forgot password?</p>
//         </div>
//         <Button variant="contained" color="success" size="large"  onClick={handleHome}>Login</Button><br></br><br></br>
//         <label style={{alignItems:"center",fontSize:"25px",marginRight:"250px"}}>New user?
//         <Button variant="contained" color="secondary" size="medium"  onClick={handleSignup}>Sign up</Button>
//         </label>
       
//         </div>
       
//             </div>
        
   
    
//         </center>
//     </div>
//     </>
//   );
// };

// export default Login

import React, { useState } from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUser = (e) => {
    setUsername(e.target.value);
    setUserError(""); // Reset error when user starts typing
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Reset error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    // Username validation
    if (username.length < 7) {
      setUserError("Username must be at least 7 characters long.");
      alert("Username must be at least 7 characters long.")
      isValid = false;
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters and include letters, numbers, and symbols."
      );
      alert("Password must be at least 8 characters and include letters, numbers, and symbols.")
      isValid = false;
    }

    if (isValid) {
      alert("Login Successful!");
      navigate("/originalhome"); // Redirect to home on successful login
    }
  };

  return (
    <div>
      <center>
        <div className="bg">
          <img
            alt="not"
            className="gridbox"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Shades_of_light_blue.png/800px-Shades_of_light_blue.png"
          />
          <div className="centered">
            <h1 style={{ color: "black", fontFamily: "serif" }}>
              Welcome to Cosmo!!!
            </h1>
            <form onSubmit={handleSubmit}>
              <label>
                Username
                <input
                  type="text"
                  className="apply"
                  placeholder="Enter your name"
                  value={username}
                  onChange={handleUser}
                />
                <br />
                {userError && <p className="error-message"></p>}
              </label>
              <br />

              <label>
                Password
                <input
                  type="password"
                  className="apply"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePassword}
                />
                <br />
                {passwordError && <p className="error-message"></p>}
              </label>

              <div className="both">
                <Checkbox style={{ marginLeft: "28%" }} {...label} defaultChecked size="large" />
                <p style={{ fontSize: "20px", marginRight: "30%" }}>Remember me</p>
                <p style={{ fontSize: "20px" }}>Forgot password?</p>
              </div>

              <Button variant="contained" color="success" size="large" type="submit">
                Login
              </Button>
            </form>

            <br />
            <label style={{ alignItems: "center", fontSize: "25px", marginRight: "250px" }}>
              New user?
              <Button variant="contained" color="secondary" size="medium" onClick={() => navigate("/signup")}>
                Sign up
              </Button>
            </label>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Login;
