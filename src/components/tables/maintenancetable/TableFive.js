import React from 'react';
import { Table } from 'react-bootstrap';
import AssignTask from '../../dropdowns/AssignTask';
import Maintenance from '../../dropdowns/Maintenance';

function TableFive() {
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
          <td>501</td>
          <td><Maintenance /></td>
          <td><AssignTask /></td>
          <td>506</td>
          <td><Maintenance /></td>
          <td><AssignTask /></td>
        </tr>
        <tr>
          <td>502</td>
          <td><Maintenance /></td>
          <td><AssignTask /></td>
          <td>507</td>
          <td><Maintenance /></td>
          <td><AssignTask /></td>
        </tr>
        <tr>
          <td>503</td>
          <td><Maintenance /></td>
          <td><AssignTask /></td>
          <td>508</td>
          <td><Maintenance /></td>
          <td><AssignTask /></td>
        </tr>
        <tr>
          <td>504</td>
          <td><Maintenance /></td>
          <td><AssignTask /></td>
          <td>509</td>
          <td><Maintenance /></td>
          <td><AssignTask /></td>
        </tr>
        <tr>
          <td>505</td>
          <td><Maintenance /></td>
          <td><AssignTask /></td>
          <td>510</td>
          <td><Maintenance /></td>
          <td><AssignTask /></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableFive;