/**
 * Created by Revenage on 3/15/2016.
 */
import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './../List/List';
import MonthHolder from './MonthHolder'

class Calendar extends Component {

    render () {
        return (
            <div className="calendar page">
                <List wishesData={ this.props.wishes }/>
                <MonthHolder/>
            </div>
        )
    }
};

export default Calendar;
