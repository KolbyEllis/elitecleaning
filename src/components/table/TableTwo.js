import React from 'react';
import { Table } from 'react-bootstrap';
import Assign from '../dropdowns/Assign';
import Issues from '../dropdowns/Issues';

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
          <td><Issues /></td>
          <td><Assign /></td>
          <td>206</td>
          <td><Issues /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>202</td>
          <td><Issues /></td>
          <td><Assign /></td>
          <td>207</td>
          <td><Issues /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>203</td>
          <td><Issues /></td>
          <td><Assign /></td>
          <td>208</td>
          <td><Issues /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>204</td>
          <td><Issues /></td>
          <td><Assign /></td>
          <td>209</td>
          <td><Issues /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>205</td>
          <td><Issues /></td>
          <td><Assign /></td>
          <td>220</td>
          <td><Issues /></td>
          <td><Assign /></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableTwo;