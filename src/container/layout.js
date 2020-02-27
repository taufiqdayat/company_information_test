import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
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
            <div>
                <Navbar bg="primary" expand="lg" variant="dark">
                    <Navbar.Brand  as={Link} to="/">Test</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/overview">Overview</Nav.Link>
                            {/* <Nav.Link as={Link} to="/offices">Office</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <App />
            </div>
        );
    }
}

export default Layout;