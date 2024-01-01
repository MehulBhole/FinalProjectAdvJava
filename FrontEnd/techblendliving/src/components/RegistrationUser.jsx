import React, { useState } from "react";
import "../Css/RegistrationUser.css";

import { sendUserData } from "../services/User";
import { useNavigate } from "react-router-dom";

export function RegistrationUser() {
  const navigate = useNavigate();
  const [userData, setUserData] =
    useState({ name: "", email: "", password: "", phoneNo: "", city: "" });
 
  const handleChange = (e)=> {
        setUserData({...userData,[e.target.name]:e.target.value});
        console.log(userData);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
      console.log(userData);
       const response = await sendUserData(userData);
       if(response.data.status){
        navigate(`/login-user`)
       }else{
        alert(" Already Registered !!")
       }
       console.log(response);      
     } catch (error) {
      console.log(error);
     }
  };

  return (
    <div className="userContainer">
      <div class="Reg-container">
        <h1>User Registration</h1>
        <br />
      <h5><a href="/registrationowner">Register as tenant ?</a></h5><br />
        <form onSubmit={handleSubmit}>
          

          <br />
          <label>Name</label>
          <input type="text" name="name" onChange={handleChange} required></input>

          <label>Email ID</label>
          <input type="email" name="email"  onChange={handleChange}required></input>

          <label>Password</label>
          <input type="password" name="password"onChange={handleChange} required></input>

          <label>Phone Number</label>
          <input type="text" name="phoneNo"  onChange={handleChange} required></input>

          <label for="email">City</label>
          <input type="text" name="city" onChange={handleChange} required></input>

          <center>
            <button className="nxtbtn" type="submit">
              Next
            </button>
          </center>
        </form>
        <div class="or-separator">
          <br />
          <hr />
          <center>OR</center>
          <br />
        </div>
        <div class="login-options">
          <a href="#" class="login-google">
            <p>Register with google </p>
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
            New here ? <a href="#">Sign Up</a>
          </p>
        </center>
      </div>
    </div>
  );
}
