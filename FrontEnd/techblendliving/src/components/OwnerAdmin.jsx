import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Dashboard } from "./DashBoard";
import { OwnerData } from "./OwnerData";

export function OwnerAdmin() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
    
      <Col lg={3} style={{ backgroundColor: "#f1f1f1", padding: "20px", minWidth: "200px" }}>
        <OwnerData />
      </Col>

     
      <Col lg={9} style={{ flex: 1, overflowY: "auto" }}>
        <Container>
          <Row>
            <Col>
              <Dashboard />
            </Col>
          </Row>
        </Container>

       
      </Col>
    </div>
  );
}
