/**
 * Created by Revenage on 3/19/2016.
 */
import React , { Component } from 'react';
import Wish from './Wish'

export default class List extends Component {
    render () {
        var rows = [];
        this.props.wishesData.forEach(function(wish, i) {
            rows.push(<Wish name={wish.name} key={i}/>);
        });

        return (
            <div className="wish-list">
                {rows}
            </div>
        )
    }
};