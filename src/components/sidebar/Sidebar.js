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
            <Nav.Link href="/features">Maintence</Nav.Link>
            <Nav.Link href="/pricing">Messages</Nav.Link>
            <Nav.Link href="/pricing">Settings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Sidebar;