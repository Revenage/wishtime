/**
 * Created by Revenage on 3/19/2016.
 */
import React , { Component } from 'react';
import EmptyDay from './../Days/EmptyDay';
import CurrentDay from './../Days/CurrentDay';
import RegularDay from './../Days/RegularDay';
import MonthName from './../MonthsAndDaysNames/MonthName';
import WeekdayNames from './../MonthsAndDaysNames/WeekdayNames'

export default class MonthCalendar extends Component {
    render () {
        let numOfMonth = this.props.monthNum;
        let data = this.props.data;

        const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const weekDayName = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];

        function getTime() {
            let now = new Date();
            let hour = now.getHours();
            let minute = now.getMinutes();
            now = null;
            let ampm = "";

            if (hour >= 12) {
                hour -= 12;
                ampm = "pm";
            } else
                ampm = "am";
            hour = (hour == 0) ? 12 : hour;

            if (minute < 10)
                minute = "0" + minute;
            return hour + ":" + minute + " " + ampm;
        }

        function getDaysInMonth(month, year) {
            let date = new Date(year, month);
            return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
        }

        function getMonthName(month) {
            return monthNames[month]
        }

        function setCal() {
            let now = new Date();
            let year = now.getYear();
            if (year < 1000) year+=1900;
            let month = numOfMonth;
            let isCurrentMonth = (numOfMonth === now.getMonth());
            let monthName = getMonthName(month);
            let currentDay = now.getDate();
            now = null;

            let firstDayInstance = new Date(year, month, 1);
            let firstDay = firstDayInstance.getDay();
            firstDayInstance = null;

            let days = getDaysInMonth(month, year);

            return drawCal(firstDay + 1, days, {isCurrentMonth: isCurrentMonth, currentDay: currentDay}, monthName, year)
        }



        function drawCal(firstDay, lastDate, date, monthName, year) {
            let digit = 1;
            let curCell = 1;
            let text = '';
            let month = [];


            for (let row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row) {
                let currentObject = {};
                for (var id in data) {
                    if (data.hasOwnProperty(id)) {
                        if (data[id].date.from.day <= digit && data[id].date.to.day >= digit) {
                            currentObject[id] = data[id];
                        }
                    }
                }
                let week = [];
                for (let col = 1; col <= 7; ++col) {
                    if (digit > lastDate)
                        break;
                    if (curCell < firstDay) {
                        week.push(<EmptyDay data={ currentObject }/>);
                        curCell++
                    } else {

                        if (digit === date.currentDay && date.isCurrentMonth) { // current cell represent today's date
                            week.push(<CurrentDay data={ currentObject } daynum={digit}/>);
                        } else
                            week.push(<RegularDay data={ currentObject } daynum={digit}/>);
                        digit++
                    }
                }
                month.push(week);
            }

            return month
        }

        return (
            <div className="month">
                <MonthName monthName={getMonthName(numOfMonth)}/>
                <WeekdayNames daynames={weekDayName}/>
                {setCal()}
                {/*<div dangerouslySetInnerHTML={setCal()}/>*/}
            </div>
        )
    }
};
