import React, { Component } from 'react';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';
import App from '../app/index';
import {Link} from 'react-router-dom';

class Layout extends Component {
    constructor(){
        super();
        this.state = {
            navCollapsed:true,
        }
    }

    btnNav(){
        this.setState({navCollapsed:!this.state.navCollapsed})
    }

    render() {
        return (
            <div className="container">
                <Navbar bg="primary" expand="lg" variant="dark">
                    <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/company">Company</Nav.Link>
                            <Nav.Link as={Link} to="/office">Office</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <App />
            </div>
        );
    }
}

export default Layout;