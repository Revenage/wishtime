/**
 * Created by Revenage on 3/15/2016.
 */
import React , { Component } from 'react';
import ReactDOM from 'react-dom';

class MonthName extends Component {
    render () {
        return (
            <div className="month-name">
               <span> {this.props.monthName} </span>
            </div>
        )
    }
};

class WeekdayName extends Component {
    render () {
        return (
            <div className="weekday-name">
                {this.props.name}
            </div>
        )
    }
};

class WeekdayNames extends Component {
    render () {
        let week = [];
        let names = this.props.daynames;

        for (let dayNum = 0; dayNum < 7; dayNum++) {
            week.push(<WeekdayName key={dayNum} name={ names[dayNum] }/>);
        }

        return (
            <div className="weekday-names">
                {week}
            </div>
        )
    }
};

class Day extends Component {
    render () {
        var name = 'day '+ this.props.type;
        return (
            <div className={name}>
                {this.props.children}
            </div>
        )
    }
};

class EmptyDay extends Component {
    render () {
        return (
            <Day type="empty">
                {this.props.daynum}
            </Day>
        )
    }
};

class CurrentDay extends Component {
    render () {
        return (
            <Day type="current">
                {this.props.daynum}
            </Day>
        )
    }
};

class RegularDay extends Component {
    render () {
        return (
            <Day type="regular">
                {this.props.daynum}
            </Day>
        )
    }
};

class MonthCalendar extends Component {
    render () {
        let numOfMonth = this.props.monthNum;

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

                let week = [];
                for (let col = 1; col <= 7; ++col) {
                    if (digit > lastDate)
                        break;
                    if (curCell < firstDay) {
                        week.push(<EmptyDay />);
                        curCell++
                    } else {
                        if (digit === date.currentDay && date.isCurrentMonth) { // current cell represent today's date
                            week.push(<CurrentDay daynum={digit}/>);
                        } else
                            week.push(<RegularDay daynum={digit}/>);
                        digit++
                    }
                }
                month.push(week);
            }

// close all basic table tags
            /*return {__html: text};*/
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

class MonthsHolder extends Component {
    render () {
        var numberYears = 12;
        let year = [];
        for (let i = 0; i < numberYears; i++) {
            year.push(<MonthCalendar key={i} monthNum={i}/>);
        }
        return (
            <div className="year">
                {year}
            </div>
        )
    }
};

class Wish extends Component {
    render () {
        var name = this.props.name || 'Error';

        return (
            <div className="wish-name">{name}</div>
        )
    }
};

class List extends Component {
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

class Calendar extends Component {
    render () {
        return (
            <div className="calendar page">
                <List wishesData={ this.props.wishes }/>
                <MonthsHolder/>
            </div>
        )
    }
};

export default Calendar;

