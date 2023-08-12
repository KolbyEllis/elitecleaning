import React from 'react';
import { Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import TableOne from '../table/TableOne';
import TableTwo from '../table/TableTwo';
import TableThree from '../table/TableThree';
import TableFour from '../table/TableFour';
import TableFive from '../table/TableFive';
import Savebutton from '../buttons/Savebutton';

function MyAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="bg-warning">First Floor</Accordion.Header>
        <Accordion.Body>
          {<TableOne />}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="bg-primary text-white">Second Floor</Accordion.Header>
        <Accordion.Body>
        {<TableTwo />}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="bg-warning">Third Floor</Accordion.Header>
        <Accordion.Body>
          {<TableThree />}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className="bg-warning">Fourth Floor</Accordion.Header>
        <Accordion.Body>
          {<TableFour />}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className="bg-warning">Fifth Floor</Accordion.Header>
        <Accordion.Body>
          {<TableFive />}
        </Accordion.Body>
      </Accordion.Item>
      <Savebutton />
    </Accordion>
  );
}

export default MyAccordion;
