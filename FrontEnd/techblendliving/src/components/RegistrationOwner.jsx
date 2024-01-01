import React, { useState } from "react";
import { sendOwnerData } from "../services/Owner";
import "../Css/RegisterOwner.css";
import { useNavigate } from "react-router-dom";

export function RegistrationOwner() {
  const navigate  =  useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    address: "",
    dob: "",
    panNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendOwnerData(formData);
      console.log(response);
      if(!response.data.status){
         alert("User Already Registered !!");
      }else{
        alert("Wait till Approval !!");
        navigate(`/`);
      }
    } catch (error) {
      console.log(error);
    }
    console.log("Form Data:", formData);
  };

  return (
    <div className="ownercontainer">
    <div className="regowner-container">
      <h1>Owner Registration</h1>
      <br />
      <h5><a href="/registrationuser">Register as Owner ?</a></h5><br />
      <form onSubmit={handleSubmit}>
        

        <label >Name</label>
          <input type="text"  name="name" onChange={handleChange} required></input>

          <label >Email ID</label>
          <input type="email" name="email"  onChange={handleChange}  required></input>

          <label >Password</label>
          <input type="password" name="password"  onChange={handleChange}  required></input>

          <label >Phone Number</label>
          <input
            type="text"
            maxLength={10}
            minLength={10}
            name ="phoneNo"
            onChange={handleChange} 
            required
          ></input>

          <label >Pancard Number</label>
          <input
            type="text"
            name="panNumber"
            maxLength={10}
            minLength={10}
            onChange={handleChange} 
            required
          ></input>

          <label >Date of Birth</label>
          <input type="text"  name="Dob" required></input>

        <div className="form-group">
          <label>Personal Address</label>
          <textarea
            className="txtarea"
            rows={4}
            cols={10}
            onChange={handleChange}
            name="address"
          />
        </div>
        <center>
          <button className="nxtbtn" type="submit" >
            Next
          </button>
        </center>
      </form>
    </div>
    </div>
  );
}
