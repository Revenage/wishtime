/**
 * Created by Revenage on 3/19/2016.
 */
import React , { Component } from 'react';

export default class Wish extends Component {

    constructor(props) {
        super(props);
        this.state = {hover: false};
        this.handleClick = this.handleClick.bind(this);
    }

    mouseOver() {
        this.setState({hover: true});
    };

    mouseOut() {
        this.setState({hover: false});
    };

    handleClick() {
        console.log(this); //logs undefined
    }

    render () {

        let name = this.props.name || 'Error';

        let normal = {
            backgroundColor: '#aaa',
        }

        let hover = {
            backgroundColor: '#333',
        }

        let styleWish = normal;
        if(this.state.hover) {
            styleWish = hover;
        }

        return (
            <div
              className="wish-name"
              style={styleWish}
              onMouseEnter={this.mouseOver.bind(this)}
              onMouseLeave={this.mouseOut.bind(this)}
              onClick={this.handleClick}
              >
              {name}
            </div>
        )
    }
};
