import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LayoutComponent extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to my component layout</h2>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                </ul>
                { this.props.children }
            </div>
        );
    }
}
