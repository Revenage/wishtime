/**
 * Created by Revenage on 3/19/2016.
 */
import React , { Component } from 'react';

export default class Wish extends Component {
    render () {
        var name = this.props.name || 'Error';

        return (
            <div className="wish-name">{name}</div>
        )
    }
};