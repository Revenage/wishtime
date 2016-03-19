/**
 * Created by Revenage on 3/15/2016.
 */
import React , { Component } from 'react';
import Calendar from './Calendar';

var WISHES = [
    {
        name: 'iPhone 6S',
        category: 'me',
        price: '650',
        date: {from: {year: 2015, month: 7, day: 6}, to: {year: 2016, month: 9, day: 26}},
        label: ''
    },
    {
        name: 'MacBook',
        category: 'me',
        price: '800',
        date: {from: {year: 2015, month: 7, day: 6}, to: {year: 2016, month: 9, day: 26}},
        label: ''
    },
    {
        name: 'iMac',
        category: 'work',
        price: '700',
        date: {from: {year: 2015, month: 7, day: 6}, to: {year: 2016, month: 9, day: 26}},
        label: ''
    },
    {
        name: 'Thunderbolt DIsplay 27"',
        category: 'work',
        price: '500',
        date: {from: {year: 2015, month: 7, day: 6}, to: {year: 2016, month: 9, day: 26}},
        label: ''
    },
    {
        name: 'Bosch Cooler',
        category: 'home',
        price: '300',
        date: {from: {year: 2015, month: 7, day: 6}, to: {year: 2016, month: 9, day: 26}},
        label: ''
    },
];

export default class CalendarPage extends Component {
    render() {
        return (
            <div>
                <Calendar wishes={ WISHES }/>
            </div>
        )
    }
};