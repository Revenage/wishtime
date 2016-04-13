/**
 * Created by Revenage on 3/19/2016.
 */
import React , { Component } from 'react';
import MonthCalendar from './MonthCalendar';

export default class MonthHolder extends Component {
    render () {
        var numberMonths = 12;
        let year = [];
        let data = this.props.data;
        for (let i = 0; i < numberMonths; i++) {
            let monthData = {};

            for (var id in data) {
                if (data.hasOwnProperty(id)) {
                    if (data[id].date.from.month >= i && data[id].date.to.month <= i) {
                        monthData[id] = data[id];
                    }
                }
            }

            year.push(<MonthCalendar key={i} data={ monthData } monthNum={i}/>);
        }
        return (
            <div className="year">
                {year}
            </div>
        )
    }
};
