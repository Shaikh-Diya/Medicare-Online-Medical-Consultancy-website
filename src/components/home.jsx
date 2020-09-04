import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { BrowserRouter as Router } from "react-router-dom";
import DoctorNavBar from "../DoctorConsole/doctorNavbar";
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
import Cards from "../forumComponents/cards_forum";
import PatientNavBar from "../PatientConsole/patientNavbar";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    var test = window.localStorage.getItem("diyasDoc");
    var patientdoc = window.localStorage.getItem("patientsDoc");
    // alert("Logged in as " + test);
    if (test != null && patientdoc == null) {
      // alert("Doctors here");
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
          <div>
            <DoctorNavBar />
          </div>
          <Cards />
        </div>
      );
    } else if (patientdoc != null && test == null) {
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
          <div>
            <PatientNavBar />
          </div>
          <Cards />
        </div>
      );
    }

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

              <Nav.Link
                className="signup-signin"
                onClick={() => this.handleModal()}
              >
                <svg
                  class="bi bi-person"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                  />
                </svg>
              </Nav.Link>
              {/* <Nav.Link onClick={() => this.handleModal()}>Login</Nav.Link> */}
            </Nav>

            {/* <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form> */}
          </Navbar>
        </div>
        <Cards />
      </div>
    );
  }
}

export default Home;
