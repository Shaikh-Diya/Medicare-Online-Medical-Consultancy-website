import React, { Component } from "react";
import {
  Button,
  Navbar,
  FormControl,
  Form,
  Nav,
  NavItem,
} from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import "./doctorcomponent-style.css";

class NavBarDoctor extends Component {
  state = {};
  render() {
    return (
      <div class="body-navbar">
        <Navbar bg="light" variant="light">
          <Navbar.Brand as={Link} to="/">
            Medicare
          </Navbar.Brand>
          <Nav className="mr-auto">
            <NavItem>
              <Nav.Link as={Link} to="/doctors">
                Doctors
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </NavItem>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default NavBarDoctor;
