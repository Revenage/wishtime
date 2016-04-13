/**
 * Created by Revenage on 3/15/2016.
 */
import React , { Component } from 'react';
import Calendar from './Month/Calendar';

let WISHES = {
    123: {
        name: 'iPhone 6S',
        category: 'me',
        price: '650',
        date: {from: {year: 2015, month: 7, day: 6}, to: {year: 2016, month: 4, day: 28}},
        label: '',
        color: '#3457ff'

    },
    654: {
        name: 'MacBook',
        category: 'me',
        price: '800',
        date: {from: {year: 2015, month: 7, day: 6}, to: {year: 2016, month: 1, day: 12}},
        label: '',
        color: '#fa5600'
    },
    345: {
        name: 'iMac',
        category: 'work',
        price: '700',
        date: {from: {year: 2015, month: 7, day: 6}, to: {year: 2016, month: 11, day: 21}},
        label: '',
        color: '#cc5599'
    },
    735: {
        name: 'Thunderbolt DIsplay 27"',
        category: 'work',
        price: '500',
        date: {from: {year: 2015, month: 7, day: 6}, to: {year: 2016, month: 9, day: 26}},
        label: '',
        color: '#0045aa',
    },
    945: {
        name: 'Bosch Cooler',
        category: 'home',
        price: '300',
        date: {from: {year: 2015, month: 7, day: 6}, to: {year: 2016, month: 9, day: 26}},
        label: '',
        color: '#aa1100',
    },
};

export default class CalendarPage extends Component {
    render() {
        return (
            <div>
                <Calendar wishes={ WISHES }/>
            </div>
        )
    }
};
