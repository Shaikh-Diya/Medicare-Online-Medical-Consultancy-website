import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Navbar,
  FormControl,
  Form,
  Nav,
  NavItem,
  Modal,
} from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import Register from "./register";
import "./style.css";

class PatientNavBar extends Component {
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
              {/* <NavItem>
                <Nav.Link as={Link} to="/editPatientProfile">
                  Edit Profile
                </Nav.Link>
              </NavItem> */}

              <NavItem>
                <Nav.Link as={Link} to="/patientProfile">
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

export default PatientNavBar;
