import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../logo.svg";

class NavBar extends Component {
    state = {};
    render() {
        return (
            <div>
                <Navbar expand="sm" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Game Title"
                            />
                            Generic CRUD
                        </Navbar.Brand>

                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/scores">Upload</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
