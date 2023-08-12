import React from 'react';
import { Table } from 'react-bootstrap';
import Assign from '../../dropdowns/AssignTask';
import Maintenance from '../../dropdowns/Maintenance';

function TableFour() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Room #</th>
          <th>Issue</th>
          <th>Assign To</th>
          <th>Room #</th>
          <th>Issue</th>
          <th>Assign To</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>401</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
          <td>406</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>402</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
          <td>407</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>403</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
          <td>408</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>404</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
          <td>409</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>405</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
          <td>410</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableFour;