import React , { Component } from 'react';
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">about</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        )
    }
};

class About extends Component{
    render() {
        return <h1>About</h1>
    }
};

export default class router extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="about" component={About}/>
                </Route>
            </Router>
        );
    }
}
