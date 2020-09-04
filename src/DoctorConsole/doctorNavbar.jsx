import React, { Component } from "react";

import { Navbar, Nav, NavItem, Modal } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import Register from "./register";
import "./style.css";

class DoctorNavBar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }
  logoutDoc() {
    window.localStorage.clear();
    window.open("https://csci5709projectdemo.herokuapp.com/", "_self");
  }
  render() {
    return (
      <div>
        <div className="modal">
          <Modal
            dialogClassName="custom-dialog"
            show={this.state.show}
            onHide={() => this.handleModal()}
          >
            <Modal.Header closeButton></Modal.Header>
            <Register />
          </Modal>
        </div>
        <div class="nb">
          <Navbar bg="light" variant="light">
            <Navbar.Brand as={Link} to="/">
              Medicare
            </Navbar.Brand>
            <Nav className="mr-auto">
              <NavItem>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={Link} to="/doctorPage">
                  Doctors
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={Link} to="/question">
                  Ask Questions
                </Nav.Link>
              </NavItem>

              <NavItem>
                <Nav.Link as={Link} to="/createPrescription">
                  Create Prescription
                </Nav.Link>
              </NavItem>

              <NavItem>
                <Nav.Link as={Link} to="/doctorProfile">
                  Profile
                </Nav.Link>
              </NavItem>
            </Nav>
            <NavItem>
              <Nav.Link onClick={() => this.logoutDoc()}>Logout</Nav.Link>
            </NavItem>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default DoctorNavBar;
