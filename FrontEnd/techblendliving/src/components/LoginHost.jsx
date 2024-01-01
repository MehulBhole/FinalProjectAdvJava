import React, { useState } from "react";
import "../Css/Login.css";

import { useNavigate } from "react-router-dom";

import { HostLoginCredentials } from "../services/HostApproval";

export function LoginHost() {
  const navigate = useNavigate();
  const [userlogin, setUserlogin] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setUserlogin({ ...userlogin, [e.target.name]: e.target.value });
    console.log(userlogin);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await HostLoginCredentials(userlogin);

      if (response.data.status) {
        sessionStorage.setItem('host-id', response.data.id);
        navigate(`/privatehost`)

      }else{
        alert("Host Login required !!");
      }

      console.log(response);

    } catch (error) {
      console.log(error);
    }
  }
  return (

    <body class="loginbody">
      <div className="login-container">
        <h1>Host Login</h1>
        <br />
       
        <form onSubmit={handleSubmit}>
          <label >Email ID</label>
          <input type="text" name="email" onChange={handleChange} required />

          <label >Password</label>
          <input type="password" name="password" onChange={handleChange} required />

          <center>
            <button className="nxtbtn" type="submit">
              Next
            </button>
          </center>
        </form>
        <div className="or-separator">
          <br />
          <hr />
          <center>OR</center>
          <br />
        </div>
        <div className="login-options">
          <a href="#" className="login-google">
            <p>Login with Google</p>
            <img
              src="https://img.icons8.com/?size=48&id=17949&format=png"
              alt="lol"
            />
          </a>
        </div>
      </div>
      <div className="Foot">
        <center>
          <p>
            New here? <a href="#">Sign Up</a>
          </p>
        </center>
      </div>
    </body>

  );
}
