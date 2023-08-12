import Dropdown from 'react-bootstrap/Dropdown';

function Cleaning() {

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Select...
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Dirty</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Clean</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Inspect</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Touch Up</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Do Not Disturb</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Cleaning;