/**
 * Created by reven on 10.03.2016.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, Link} from 'react-router'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Header from './components/Header';

const container = document.getElementById('App');

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
};

ReactDOM.render((
    <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="/about" component={AboutPage}/>
        <Route path="/home" component={HomePage}/>
    </Route>
    </Router>
), container);