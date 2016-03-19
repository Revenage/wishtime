/**
 * Created by Revenage on 3/19/2016.
 */
import React , { Component } from 'react';
import MonthCalendar from './MonthCalendar';

export default class MonthHolder extends Component {
    render () {
        var numberYears = 12;
        let year = [];
        for (let i = 0; i < numberYears; i++) {
            year.push(<MonthCalendar key={i} monthNum={i}/>);
        }
        return (
            <div className="year">
                {year}
            </div>
        )
    }
};