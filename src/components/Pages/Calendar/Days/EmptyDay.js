/**
 * Created by Revenage on 3/19/2016.
 */
import React , { Component } from 'react';
import Day from './Day'

export default class EmptyDay extends Component {
    render () {
        return (
            <Day type="empty">
                {this.props.daynum}
            </Day>
        )
    }
};