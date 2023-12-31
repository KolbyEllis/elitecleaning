import React from 'react';
import { Table } from 'react-bootstrap';
import Assign from '../../dropdowns/AssignTask';
import Cleaning from '../../dropdowns/Cleaning';

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
          <td><Cleaning /></td>
          <td><Assign /></td>
          <td>506</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>502</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
          <td>507</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>503</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
          <td>508</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>504</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
          <td>509</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>505</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
          <td>510</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableFive;