import React from 'react';
import { Table } from 'react-bootstrap';
import Assign from '../dropdowns/Assign';
import Issues from '../dropdowns/Issues';

function TableOne() {
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
          <td>101</td>
          <td><Issues /></td>
          <td><Assign /></td>
          <td>106</td>
          <td><Issues /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>102</td>
          <td><Issues /></td>
          <td><Assign /></td>
          <td>107</td>
          <td><Issues /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>103</td>
          <td><Issues /></td>
          <td><Assign /></td>
          <td>108</td>
          <td><Issues /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>104</td>
          <td><Issues /></td>
          <td><Assign /></td>
          <td>109</td>
          <td><Issues /></td>
          <td><Assign /></td>
        </tr>
        <tr>
          <td>105</td>
          <td><Issues /></td>
          <td><Assign /></td>
          <td>110</td>
          <td><Issues /></td>
          <td><Assign /></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableOne;