import { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import "../Css/Host.css";
import { FetchApprovalDetails, HostApprovalById, HostRejectionById } from "../services/HostApproval";
export function Host(){

    const[details,setDetails] = useState([]);

    async function populateAdmindata() {
      try {
         const response =  await FetchApprovalDetails();
         console.log(response);
          setDetails(response.data);
       
      } catch (error) {
        console.log(error);
      }
};
const handleDelete=async(id)=>
{
 try {
   const response= await HostRejectionById(id);
   populateAdmindata()
    console.log(response);
 } catch (error) {
  console.log(error);
 }
}
const handleApprove=async(id)=>
{
 try {
   
          const response = await HostApprovalById(id);
      populateAdmindata()
       console.log(response);

 } catch (error) {
  console.log(error);
 }
}
 useEffect(()=>
   { 
    populateAdmindata()
   },[])

    return(
    <div className="host">
        <center><h2>Host Approval</h2></center>
         <Container className="containerHost">
            <Row>
            <Table striped bordered hover style={{textAlign:"center"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Pancard Number</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
         {details.map(d=>
        <tr>
          <td>{d.name}</td>
          <td>{d.email}</td>
          <td>{d.phoneNo}</td>
          <td>{d.panNumber}</td>
          <td>{d.address}</td>

          <td>
          <Button style={{marginLeft: 1 + 'em'}}variant="danger" onClick={()=>{
            handleDelete(d.id)
          }}>Reject</Button>
           <Button style={{marginLeft: 1 + 'em'}}variant="success" onClick={()=>{
            handleApprove(d.id)
          }}>Approve</Button>
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
    );
}