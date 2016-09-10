import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

export default class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Nav>
                      <IndexLinkContainer to={{pathname : '/'}}>
                        <NavItem>Home</NavItem>
                      </IndexLinkContainer>
                      <IndexLinkContainer to={{pathname : '/login'}}>
                        <NavItem>Login</NavItem>
                      </IndexLinkContainer>
                      <IndexLinkContainer to={{pathname : '/about'}}>
                        <NavItem>About</NavItem>
                      </IndexLinkContainer>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
