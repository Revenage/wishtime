/**
 * Created by Revenage on 3/19/2016.
 */
import React , { Component } from 'react';

export default class WeekdayName extends Component {
    render () {
        return (
            <div className="weekday-name">
                {this.props.name}
            </div>
        )
    }
};
