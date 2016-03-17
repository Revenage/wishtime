/**
 * Created by Revenage on 3/15/2016.
 */
import React , { Component } from 'react';
import ReactDOM from 'react-dom';

class calendarElement extends Component {

    render () {

    }
};

class daysNames extends Component {
    render () {
        let tr = [];
        for (let dayNum = 0; dayNum < 7; ++dayNum) {
            tr.push(<dayName>  </dayName>)
        }
        return (
            <div>
                {tr}
            </div>
        )
    }
};

class Calendar extends calendarElement {
    render () {

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

        function leapYear(year) {
            if (year % 4 == 0) // basic rule
                return true; // is leap year
            /* else */ // else not needed when statement is "return"
            return false; // is not leap year
        }

        function setCal() {
            let now = new Date();
            let year = now.getYear();
            if (year < 1000) year+=1900;
            let month = now.getMonth();
            let monthName = getMonthName(month);
            let date = now.getDate();
            now = null;

            let firstDayInstance = new Date(year, month, 1);
            let firstDay = firstDayInstance.getDay();
            firstDayInstance = null;

            let days = getDaysInMonth(month, year);

            return drawCal(firstDay + 1, days, date, monthName, year)
        }



        function drawCal(firstDay, lastDate, date, monthName, year) {
// constant table settings
            let headerHeight = 50 ;// height of the table's header cell
            let border = 2; // 3D height of table's border
            let cellspacing = 4; // width of table's border
            let headerColor = "midnightblue"; // color of table's header
            let headerSize = "+3";// size of tables header font
            let colWidth = 60; // width of columns in table
            let dayCellHeight = 25; // height of cells containing days of the week
            let dayColor = "darkblue";// color of font representing week days
            let cellHeight = 40; // height of cells representing dates in the calendar
            let todayColor = "red"; // color specifying today's date in the calendar
            let timeColor = "purple"; // color of font representing current time

// create basic table structure
            let text = "";// initialize accumulative variable to empty string
            //text += '<TABLE BORDER=' + border + ' CELLSPACING=' + cellspacing + '>'; // table settings
            /*text += '<TH COLSPAN=7 HEIGHT=' + headerHeight + '>' ;// create table header cell
            text += '<FONT COLOR="' + headerColor + '" SIZE=' + headerSize + '>'; // set font for table header
            text += monthName + ' ' + year;
            text += '</FONT>'; // close table header's font settings
            text += '</TH>'; // close header cell*/
// variables to hold constant settings
            let openCol = '<TD WIDTH=' + colWidth + ' HEIGHT=' + dayCellHeight + '>';
            openCol += '<FONT COLOR="' + dayColor + '">';
            let closeCol = '</FONT></TD>';
// create first row of table to set column width and specify week day
            text += '<TR ALIGN="center" VALIGN="center">';
            for (let dayNum = 0; dayNum < 7; ++dayNum) {
                text += openCol + weekDayName[dayNum] + closeCol
            }
            text += '</TR>';

// declaration and initialization of two variables to help with tables
            let digit = 1;
            let curCell = 1;

            for (let row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row) {
                text += '<TR ALIGN="right" VALIGN="top">';
                for (let col = 1; col <= 7; ++col) {
                    if (digit > lastDate)
                        break;
                    if (curCell < firstDay) {
                        text += '<TD></TD>';
                        curCell++
                    } else {
                        if (digit == date) { // current cell represent today's date
                            text += '<TD HEIGHT=' + cellHeight + '>';
                            text += '<FONT COLOR="' + todayColor + '">';
                            text += digit;
                            text += '</FONT><BR>';
                            text += '<FONT COLOR="' + timeColor + '" SIZE=2>';
                            text += '<CENTER>' + getTime() + '</CENTER>';
                            text += '</FONT>';
                            text += '</TD>';
                        } else
                            text += '<TD HEIGHT=' + cellHeight + '>' + digit + '</TD>';
                        digit++
                    }
                }
                text += '</TR>';
            }

// close all basic table tags
            return {__html: text};
        }

        return (
            <div className="calendar">
                <table>
                    <daysNames/>
                    <div dangerouslySetInnerHTML={setCal()}/>
                </table>
            </div>
        )
    }
};

export default Calendar;

