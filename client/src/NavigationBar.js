import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom'

class NavigationBar extends Component {
    render() {
        return (
            <Navbar expand="md" bg="dark" variant="dark">
                <Navbar.Brand className="ml-4">Car Rental Agency</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-4">
                        <Nav.Link as={Link} to='/dashboard'> Dashboard</Nav.Link>
                        <Nav.Link as={Link} to='/bookings'>Current Bookings</Nav.Link>
                        <Nav.Link as={Link} to='/contactme'>Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(NavigationBar)
