import React from 'react';
import { Accordion } from 'react-bootstrap';

function MyAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>First Floor</Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Second Floor</Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item>
       <Accordion.Item eventKey="2">
        <Accordion.Header>Third Floor</Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Fourth Floor</Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Fifth Floor</Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MyAccordion;
