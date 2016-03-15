import React , { Component } from 'react';
import {Link} from 'react-router';

export default class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="wrapper">
                    <ul>
                        <li>
                            <Link to="/exit">
                                Therms
                            </Link>
                        </li>
                        <li>
                            <Link to="/exit">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to="/exit">
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </div>
                <span>
                    2016
                </span>
            </div>
        );
    }
}
