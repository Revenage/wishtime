/**
 * Created by Revenage on 3/11/2016.
 */
import React , { Component } from 'react';

export default class HomePage extends Component {

    render() {
        let bgStyle = {
            backgroundImage: 'url(http://placekitten.com/1920/600)',
            height: '600px',
            width: '100%'

        };

        let name = {
            textAlign: 'center',
            margin: '0 auto',
            color: '#ffffff',
            fontSize: '6em',
            padding: '20%'
        }

        return (
            <div>
                <div className="bg-picture" style={bgStyle}>
                    <h1 style={name}>WishTime</h1>
                </div>
            </div>
        );
    }
}
