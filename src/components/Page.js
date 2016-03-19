/**
 * Created by Revenage on 3/11/2016.
 */
import React , { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export default class Page extends Component {

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}
