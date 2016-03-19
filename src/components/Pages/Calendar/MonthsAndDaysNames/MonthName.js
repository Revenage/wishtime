/**
 * Created by Revenage on 3/19/2016.
 */
import React , { Component } from 'react';

export default class MonthName extends Component {
    render () {
        return (
            <div className="month-name">
                <span> {this.props.monthName} </span>
            </div>
        )
    }
};