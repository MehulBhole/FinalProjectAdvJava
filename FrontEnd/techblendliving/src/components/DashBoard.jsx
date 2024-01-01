import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import "../Css/Dashboard.css";
import { FaUser } from "react-icons/fa";
import { OwnerDeleteById, getOnwerById, getOwnerById, propertyDataFetch, sendDataOwner } from "../services/Owner";

export function Dashboard() {
  const id = sessionStorage.getItem("owner-id");
  
  const[details,setDetails] = useState([]);
  const [formData, setFormData] = useState({
    rentalType: '',
    rent: '',
    furnished: '',
    address: '',

  });
  
  const [userdata, setUserData] = useState({
    rentalType: "",
    rent: "",
    furnished: "",
    address: "",
    image1: "", 
  });
  // const handleImageChange = (e) => {
  //   setFormData({ ...formData, image1: e.target.files[0] });
  // };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDelete=async(propertyid)=>
{

 try {
 const response= await OwnerDeleteById(propertyid,id);
 populateData();
 
 } catch (error) {
  console.log(error);
 }
}

const handleSave=async(e)=>{
  e.preventDefault();
  console.log(id);
 try {
       
           console.log(formData);
             const response = await sendDataOwner(id,formData);
           if(response.data.status){
            alert("Property Added !!");
           }
           populateData();
     

 } catch (error) {
  console.log(error);
 }
}

const [profileowner, setProfileOwner] = useState({
  name: "",
  email: "",
  password: "",
  phoneNo: "",
  city: "",
});

async function populateData() {
  try {
   
    const response = await getOwnerById(id);
    setProfileOwner(response.data);
    const propertydata = await propertyDataFetch(id);
    setDetails(propertydata.data);
    console.log(propertydata);

  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  populateData();
}, []);

  return (
  
    <div className="maindiv">
    <div className="left">
    <div className="heading">
          <h2>Owner Info</h2>
          <hr></hr>
        </div>
        <div >
          <div className="usericon">
            <FaUser size={90}></FaUser>
          </div>
         

            {profileowner && (
              <div className="userdiv">
                <b>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {profileowner.name}</b>
              </div>
            )}

            {profileowner && (
              <div className="userdiv">
                <b>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{profileowner.email}</b>
              </div>
            )}

            {profileowner && (
              <div className="userdiv">
                <b>City: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {profileowner.city} </b>
              </div>
            )}

            {profileowner && (
              <div className="userdiv">
                <b>Phone No: {profileowner.phoneNo}</b>
              </div>
            )}
          </div>
        
    </div>
    <div className="middle">
    <center> <h3>Property Details</h3></center>
   
      <section >
      
        
          <form onSubmit={handleSave}>
            <div className="radiobutton">
              <label htmlFor="property">Rental Type</label>
              <input type="radio" name="rentalType" onChange={handleChange} value="PG" /> PG
              <input type="radio" name="rentalType"  onChange={handleChange} value="1BHK" /> 1BHK
              <input type="radio" name="rentalType" onChange={handleChange} value="2BHK" /> 2BHK
              <input type="radio" name="rentalType"  onChange={handleChange} value="3BHK" /> 3BHK
              <input type="radio" name="rentalType" onChange={handleChange} value="1RK" /> 1RK
            </div>
            <br />

            <label htmlFor="rent">Rent</label>
            <input type="Number" id="rent" name="rent" onChange={handleChange} required />

            <div className="radiobutton">
              <label htmlFor="furnished">Furnished</label>
              <input type="radio" name="furnished" onChange={handleChange} value="Fully Furnished" /> Fully Furnished
              <input type="radio" name="furnished" onChange={handleChange} value="Semi-Furnished" /> Semi-Furnished
              <input type="radio" name="furnished"  onChange={handleChange} value="No" /> No
            </div>

            <label>Address</label>
            <textarea
              className="txtarea"
              rows={4}
              name="address"
              onChange={handleChange}
              cols={10}
            />

            {/* <label htmlFor="image1">Images</label>
            <input type="file" name="image1" accept="image/*" />

            <label htmlFor="image2">Images</label>
            <input type="file" name="image2" accept="image/*"  />

            <label htmlFor="image3">Images</label>
            <input type="file" name="image3" accept="image/*"  />

            <label htmlFor="video">Video</label>
            <input type="file" name="video" accept="video/*"  /> */}

            <center>
              <button className="nxtbtn" type="submit">
                Save
              </button>
            </center>
          </form>
       
      </section>
    </div>
    <div className="right">
    <center><h2>Properties</h2></center>
         <Container className="containerHost">
            <Row>
            <Table striped bordered hover style={{textAlign:"center"}}>
      <thead>
        <tr>
          <th>Rental Type</th>
          <th>Rent</th>
          <th>Furnished Status</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
         {details.map(d=>
        <tr>
          <td>{d.rentalType}</td>
          <td>{d.rent}</td>
          <td>{d.furnished}</td>
         
          <td>{d.address}</td>

          <td>
          <Button style={{marginLeft: 1 + 'em'}}variant="danger" onClick={()=>{
            handleDelete(d.id)
          }}>Delete</Button>
           {/* <Button style={{marginLeft: 1 + 'em'}}variant="success" onClick={()=>{
            // handleApprove(d.id)
          }}>Edit</Button> */}
          </td>
          <td>{d.Remarks}</td>
          <td></td>
        </tr>
       )}
      </tbody>
    </Table>
            </Row>
        </Container>
    </div>
    </div>
  
  );
}
