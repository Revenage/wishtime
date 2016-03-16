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
                        <li><Link to="/">
                            <i className="fa fa-pie-chart fa-lg"></i> WishTime
                        </Link></li>
                        <li>
                            <Link to="/calendar"><i className="fa fa-calendar"></i> Calendare</Link>
                        </li>
                        <li>
                            <Link to="/discuss"><i className="fa fa-weixin"></i> Discuss</Link>
                        </li>
                        <li>
                            <Link to="/about"><i className="fa fa-user-secret"></i> About</Link>
                        </li>
                    </nav>
                    <div className="right-block">
                        <Link to="/account">
                            <img src="https://github.com/Revenage.png" className="gravatar"/>
                        </Link>
                        <Link to="/account">
                            AccountName
                        </Link>
                        <Link to="/exit">
                            <i className="fa fa-sign-out"></i>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}