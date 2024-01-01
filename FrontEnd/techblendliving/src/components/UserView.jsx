import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import "../Css/Userview.css";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchById } from "../services/User";
import imgandrew from "../media/a.jpg";
import { Route, useNavigate } from "react-router-dom";

export function UserView() {
  const navigate = useNavigate();
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    city: "",
  });

  async function populateData() {
    try {
      const id = sessionStorage.getItem("id");
      const response = await fetchById(id);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleService=()=>{
            navigate(`/services`) 
  }
  const handleProperty=()=>{
    navigate(`/properties`) 
}

  useEffect(() => {
    populateData();
  }, []);

  return (
    <div className="userview">
      <div className="leftuser">
        <div className="heading">
          <h2>User Info</h2>
          <hr></hr>
        </div>
        <div className="userData">
          <div className="usericon">
            <FaUser size={90}></FaUser>
          </div>
          {userdata && (
            <div className="userdiv">
              <b>
                Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                {userdata.name}
              </b>
            </div>
          )}
          {userdata && (
            <div className="userdiv">
              <b>
                Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {userdata.email}
              </b>
            </div>
          )}
          {userdata && (
            <div className="userdiv">
              <b>
                City:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                {userdata.city}{" "}
              </b>
            </div>
          )}
          {userdata && (
            <div className="userdiv">
              <b>Phone No: {userdata.phoneNo}</b>
            </div>
          )}
        </div>
      </div>
      <div className="middleuser">
      <div className="searchbox1">
  <div className="searchPanel">
    <div className="searchbar-main">
      <input
        className="searchBox1"
        type="text"
        placeholder="Search your dream home"
      />
      <button className="searchbtn ml-auto">Search</button>
    </div>
  </div>
</div>
        <hr></hr>
        <div className="searchResult">
          <div className="corouselparent">
           
          <div className="parentRow">
        
        <div className="one">
            <Col xs={12} md={6} lg={3}>
              <Card className="card-img-top"
                style={{ width: "18rem", margin: "10px" }}>
                <Card.Img
                  variant="top"
                  src="data:image/jpeg;base64,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" width="300" height="200" // Replace "URL_OF_YOUR_IMAGE" with the actual URL of your image
                  className="card-img-top" // Add the zoom-effect class
                />
                <Card.Body>
                  <Card.Title>Visit To Properties</Card.Title>
                  <Card.Text>
                    properties
                  </Card.Text>
                  <Button style={{ backgroundColor: "#D8232A" }} onClick={handleProperty} >Show Properties</Button>
                </Card.Body>
              </Card>
            </Col>
            </div>
            <div className="two">
            <Col xs={12} md={6} lg={3}>
              <Card className="card-img-top"
                style={{ width: "18rem", margin: "10px" }}>
                <Card.Img variant="top" src="data:image/jpeg;base64,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" width="300" height="200" />
                <Card.Body>
                  <Card.Title>Visit Our Services</Card.Title>
                  <Card.Text>
                    Services
                  </Card.Text>
                  <Button style={{ backgroundColor: "#D8232A" }} onClick={handleService}>Services</Button>
                </Card.Body>
              </Card>
            </Col>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightuser"></div>
    </div>
  );
}
