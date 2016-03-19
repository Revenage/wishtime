/**
 * Created by reven on 10.03.2016.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, IndexRoute, Route, Link} from 'react-router'
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import Page from './components/Page';
import CalendarPage from './components/Pages/Calendar/CalendarPage';

const container = document.getElementById('App');

ReactDOM.render((
    <Router history={browserHistory}>
    <Route path="/" component={Page}>
        <IndexRoute component={HomePage} />
        <Route path="/about" component={AboutPage}/>
        <Route path="/calendar" component={CalendarPage}/>
    </Route>
    </Router>
), container);