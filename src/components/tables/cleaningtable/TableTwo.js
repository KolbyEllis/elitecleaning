import React from 'react';
import { Table } from 'react-bootstrap';
import Assign from '../../dropdowns/AssignTask';
import Cleaning from '../../dropdowns/Cleaning';

function TableTwo() {
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
          <td>201</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
          <td>206</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>202</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
          <td>207</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>203</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
          <td>208</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>204</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
          <td>209</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>205</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
          <td>220</td>
          <td><Cleaning /></td>
          <td><Assign /></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableTwo;