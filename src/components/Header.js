/**
 * Created by reven on 12.03.2016.
 */
import React , { Component } from 'react';
import { browserHistory, Router, Route, Link} from 'react-router';

export default class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="wrapper">
                    <nav>
                        <li><Link to="/">WishTime</Link></li>
                        <li><Link to="/calendare">Calendare</Link></li>
                        <li><Link to="/diskcuss">Discuss</Link></li>
                        <li><Link to="/author">Author</Link></li>
                    </nav>
                    <div className="right-block">
                        <Link to="/account">Account name</Link>
                        <Link to="/exit">Exit ico</Link>
                    </div>
                </div>
            </div>
        );
    }
}