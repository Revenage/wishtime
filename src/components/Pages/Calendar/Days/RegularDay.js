/**
 * Created by Revenage on 3/19/2016.
 */
import React , { Component } from 'react';
import Day from './Day'

export default class RegularDay extends Component {
    render () {
        return (
            <Day type="regular">
                {this.props.daynum}
            </Day>
        )
    }
};