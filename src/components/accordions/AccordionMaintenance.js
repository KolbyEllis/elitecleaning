import React from 'react';
import { Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableOne from '../tables/maintenancetable/TableOne';
import TableTwo from '../tables/maintenancetable/TableTwo';
import TableThree from '../tables/maintenancetable/TableThree';
import TableFour from '../tables/maintenancetable/TableFour';
import TableFive from '../tables/maintenancetable/TableFive';
import Savebutton from '../buttons/Savebutton';

function AccordionMaintenance() {
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

export default AccordionMaintenance;
