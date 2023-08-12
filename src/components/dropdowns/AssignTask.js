import Dropdown from 'react-bootstrap/Dropdown';

function AssignTask() {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Select...
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Kolby Ellis</Dropdown.Item>
        <Dropdown.Item href="#/action-2">James Smith</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AssignTask;