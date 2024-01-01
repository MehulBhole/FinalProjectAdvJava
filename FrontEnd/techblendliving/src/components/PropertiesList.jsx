import '../Css/Userview.css';

import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const PropertiesList = ({ providers }) => {
  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedProviders = chunkArray(providers, 2); // Display two cards in each row

  return (
    <div>
      {chunkedProviders.map((row, rowIndex) => (
        <Row key={rowIndex} className="mb-3">
          {row.map(provider => (
            <Col key={provider.id} md={6}>
              <Card style={{ width: '18rem' }} className="mx-auto">
                <Card.Img variant="top" src={provider.photo} alt={`Service Provider ${provider.id}`} />
                <Card.Body>
                  <Card.Title>{provider.name}</Card.Title>
                  <Card.Text>
                    Phone: {provider.phoneNo}
                    <br />
                    Rating: {provider.rating} stars
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default PropertiesList;
