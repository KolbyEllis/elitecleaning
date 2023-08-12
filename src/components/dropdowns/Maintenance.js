import Dropdown from 'react-bootstrap/Dropdown';

function Maintenance() {

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Select...
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Bedroom</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Bathroom</Dropdown.Item>
        <Dropdown.Item href="#/action-2">KeyCard</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Other</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Maintenance;