/**
 * Created by reven on 12.03.2016.
 */
import React , { Component } from 'react';
import { browserHistory, Router, Route, Link} from 'react-router';

export default class Header extends Component {

    render() {
        return (
            <div>
                Header
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

            </div>
        );
    }
}