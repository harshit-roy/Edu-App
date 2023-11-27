import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
const Users = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title>User Profile</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                John Doe
              </Card.Subtitle>
              <Card.Text>
                <strong>Email:</strong> john.doe@example.com
              </Card.Text>
              <Card.Text>
                <strong>Location:</strong> City, Country
              </Card.Text>
              {/* Add more user information as needed */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Users;
