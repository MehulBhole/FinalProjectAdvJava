import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import "../Css/ServiceView.css";
import { fetchById } from "../services/User";
import img5 from "../media/electrician.jpg"; // Change the path accordingly
import img6 from "../media/iron.jpg"; // Change the path accordingly
import img2 from "../media/jhadu.jpg"; // Change the path accordingly
import img4 from "../media/kachra.jpg"; // Change the path accordingly
import img3 from "../media/nali.jpg"; // Change the path accordingly
import img1 from "../media/plumber.jpg"; // Change the path accordingly

export function ServiceView() {
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
              <b>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {userdata.name}</b>
            </div>
          )}
          {userdata && (
            <div className="userdiv">
              <b>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userdata.email}</b>
            </div>
          )}
          {userdata && (
            <div className="userdiv">
              <b>City: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {userdata.city} </b>
            </div>
          )}
          {userdata && (
            <div className="userdiv">
              <b>Phone No: {userdata.phoneNo}</b>
            </div>
          )}
        </div>
      </div>
      <div className="middle">
        <div className="searchPanel">
          <form>
            <label>City:</label>
            <input type="text" name="City" />
            <button className="searchbtn">Search</button>
          </form>
        </div>
        <hr></hr>
        <div className="searchResult">
          <Row>
            {/* Display first card with photo */}
            <Col md={4}>
              <Card className="mb-4" style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={img1} // Replace with the actual path or URL to your photo
                  alt="Card Image 1"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Header>Card 1</Card.Header>
                  <Card.Title>Plumber</Card.Title>
                  <Card.Text>
                    


                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Display second card with photo */}
            <Col md={4}>
              <Card className="mb-4" style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={img2} // Replace with the actual path or URL to your photo
                  alt="Card Image 2"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Header>Card 2</Card.Header>
                  <Card.Title>Maid</Card.Title>
                  <Card.Text>
                    


                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Display third card with photo */}
            <Col md={4}>
              <Card className="mb-4" style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={img3} // Replace with the actual path or URL to your photo
                  alt="Card Image 3"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Header>Card 3</Card.Header>
                  <Card.Title>Cleaner</Card.Title>
                  <Card.Text>
                   


                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            {/* Display fourth card with photo */}
            <Col md={4}>
              <Card className="mb-4" style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={img4} // Replace with the actual path or URL to your photo
                  alt="Card Image 4"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Header>Card 4</Card.Header>
                  <Card.Title>Kachrawala</Card.Title>
                  <Card.Text>
                    



                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Display fifth card with photo */}
            <Col md={4}>
              <Card className="mb-4" style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={img5} // Replace with the actual path or URL to your photo
                  alt="Card Image 5"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Header>Card 5</Card.Header>
                  <Card.Title>Electrician</Card.Title>
                  <Card.Text>
                    


                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Display sixth card with photo */}
            <Col md={4}>
              <Card className="mb-4" style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={img6} // Replace with the actual path or URL to your photo
                  alt="Card Image 6"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Header>Card 6</Card.Header>
                  <Card.Title>Iron </Card.Title>
                  <Card.Text>
                   
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}