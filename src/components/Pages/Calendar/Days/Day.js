/**
 * Created by Revenage on 3/19/2016.
 */
import React , { Component } from 'react';

export default class Day extends Component {
    render () {
        var name = 'day '+ this.props.type;
        return (
            <div className={name}>
                {this.props.children}
            </div>
        )
    }
};