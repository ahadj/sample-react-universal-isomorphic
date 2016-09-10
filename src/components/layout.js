import React, { Component } from 'react';
import { Link } from 'react-router';
import { IndexLinkContainer } from 'react-router-bootstrap';
import Navbar from './navbar';

export default class LayoutComponent extends Component {
    render() {
        return (
            <div>
                <Navbar color="red" active="active"/>
                <h2>Welcome to my component layout</h2>
                { this.props.children }
            </div>
        );
    }
}
