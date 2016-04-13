/**
 * Created by Revenage on 3/19/2016.
 */
import React , { Component } from 'react';
import Wish from './Wish'

export default class List extends Component {
    render () {
        var rows = [];
        for (let id in this.props.wishesData) {
            let wish = this.props.wishesData[id];
            rows.push(<Wish name={wish.name} color={wish.color} wish-id={id} key={id}/>);
        };

        return (
            <div className="wish-list">
                {rows}
            </div>
        )
    }
};
