/**
 * Created by reven on 10.03.2016.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, IndexRoute, Route, Link} from 'react-router'
import HomePage from './components/Pages/HomePage/HomePage';
import WishesPage from './components/Pages/WishesPage';
import SkillsPage from './components/Pages/SkillsPage';
import PrioritiesPage from './components/Pages/PrioritiesPage';
import Page from './components/Page';
import CalendarPage from './components/Pages/Calendar/CalendarPage';
const container = document.getElementById('App');

ReactDOM.render((
    <Router history={browserHistory}>
    <Route path="/" component={Page}>
        <IndexRoute component={HomePage} />
        <Route path="/calendar" component={CalendarPage}/>
        <Route path="/wishes" component={WishesPage}/>
        <Route path="/skills" component={SkillsPage}/>
        <Route path="/priorities" component={PrioritiesPage}/>
    </Route>
    </Router>
), container);