import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Sidebar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/housekeeping">Housekeeping</Nav.Link>
            <Nav.Link href="/maintenance">Maintenance</Nav.Link>
            <Nav.Link href="/messages">Messages</Nav.Link>
            <Nav.Link href="/Settings">Settings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Sidebar;
