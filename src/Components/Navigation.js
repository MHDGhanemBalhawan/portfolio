import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
class Navigation extends React.PureComponent {
  render() {
    return (
      <Navbar bg="info" variant="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home" />
        <Image src="images/logo.png" className="logo" />
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
