import React from "react";
import ReactBootstrap, {
  Navbar,
  Nav,
  umbotron,
  Button,
  Col,
  Grid,
  Panel,
  FormGroup
} from "react-bootstrap";

class Navigation extends React.PureComponent {
  render() {
    return (
      <Navbar bg="success" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Mohamad Balhawan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
