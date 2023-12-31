import React from 'react';
import { Table } from 'react-bootstrap';
import Assign from '../../dropdowns/AssignTask';
import Maintenance from '../../dropdowns/Maintenance';

function TableThree() {
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
          <td>301</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
          <td>306</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>302</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
          <td>307</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>303</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
          <td>308</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>304</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
          <td>309</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>305</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
          <td>310</td>
          <td><Maintenance /></td>
          <td><Assign /></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableThree;