/**
 * Created by Revenage on 3/19/2016.
 */
import React , { Component } from 'react';
import WeekdayName from './WeekdayName'

export default class WeekdayNames extends Component {
    render () {
        let week = [];
        let names = this.props.daynames;

        for (let dayNum = 0; dayNum < 7; dayNum++) {
            week.push(<WeekdayName key={dayNum} name={ names[dayNum] }/>);
        }

        return (
            <div className="weekday-names">
                {week}
            </div>
        )
    }
};