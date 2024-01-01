import React, { useState } from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import { fetchServiceProviders } from './fetchServiceProviders';
import ServiceProviderList from './ServiceProviderList';

export function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [serviceProviders, setServiceProviders] = useState([]);

  const handleServiceChange = async (service) => {
    setSelectedService(service);
    const providers = await fetchServiceProviders(service);
    setServiceProviders(providers);
  };

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1>Welcome to Our Services</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Dropdown onSelect={handleServiceChange} className="d-inline-block">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="text-center">
              {selectedService ? `Selected Service  : ${selectedService}` : 'Select a Service'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="plumber">Plumber</Dropdown.Item>
              <Dropdown.Item eventKey="electrician">Electrician</Dropdown.Item>
              <Dropdown.Item eventKey="maid">Maid</Dropdown.Item>
              <Dropdown.Item eventKey="wifiProvider">WiFi Provider</Dropdown.Item>
              <Dropdown.Item eventKey="kachrawala">Kachrawala</Dropdown.Item>
              <Dropdown.Item eventKey="ironingMan">Ironing Man</Dropdown.Item>
              <Dropdown.Item eventKey="cleaner">Cleaner</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {selectedService && <ServiceProviderList providers={serviceProviders} />}
        </Col>
      </Row>
    </Container>
  );
}



