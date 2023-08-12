import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="bg-warning">Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          {/* Body content */}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="bg-primary text-white">Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          {/* Body content */}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
