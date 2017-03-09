/**
 * Created by Revenage on 3/15/2016.
 */
import React , { Component } from 'react';
import Calendar from './Month/Calendar';
import {testData} from '../../../store/middlewares/requests';

export default class CalendarPage extends Component {
    componentWillMount() {
        testData()
            .then(console.log('UUUURAAA'));
    }
    render() {
        return (
            <div>
                <Calendar wishes={{}}/>
            </div>
        )
    }
};
