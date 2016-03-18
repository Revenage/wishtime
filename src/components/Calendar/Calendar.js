/**
 * Created by Revenage on 3/15/2016.
 */
import React , { Component } from 'react';
import ReactDOM from 'react-dom';

/*var ProductCategoryRow = React.createClass({
    render: function() {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    }
});

var ProductRow = React.createClass({
    render: function() {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
});

var ProductTable = React.createClass({
    render: function() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function(product) {
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var SearchBar = React.createClass({
    render: function() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
});

var FilterableProductTable = React.createClass({
    render: function() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
});


var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];*/

/*class Calendar extends calendarElement {
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
            /!* else *!/ // else not needed when statement is "return"
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
            /!*text += '<TH COLSPAN=7 HEIGHT=' + headerHeight + '>' ;// create table header cell
            text += '<span COLOR="' + headerColor + '" SIZE=' + headerSize + '>'; // set font for table header
            text += monthName + ' ' + year;
            text += '</span>'; // close table header's font settings
            text += '</TH>'; // close header cell*!/
// variables to hold constant settings
            let openCol = '<TD WIDTH=' + colWidth + ' HEIGHT=' + dayCellHeight + '>';
            openCol += '<span COLOR="' + dayColor + '">';
            let closeCol = '</span></TD>';
// create first row of table to set column width and specify week day
            text += '<div ALIGN="center" VALIGN="center">';
            for (let dayNum = 0; dayNum < 7; ++dayNum) {
                text += openCol + weekDayName[dayNum] + closeCol
            }
            text += '</div>';

// declaration and initialization of two variables to help with tables
            let digit = 1;
            let curCell = 1;

            for (let row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row) {
                text += '<div ALIGN="right" VALIGN="top">';
                for (let col = 1; col <= 7; ++col) {
                    if (digit > lastDate)
                        break;
                    if (curCell < firstDay) {
                        text += '<TD></TD>';
                        curCell++
                    } else {
                        if (digit == date) { // current cell represent today's date
                            text += '<TD HEIGHT=' + cellHeight + '>';
                            text += '<span COLOR="' + todayColor + '">';
                            text += digit;
                            text += '</span><BR>';
                            text += '<span COLOR="' + timeColor + '" SIZE=2>';
                            text += '<CENTER>' + getTime() + '</CENTER>';
                            text += '</span>';
                            text += '</TD>';
                        } else
                            text += '<TD HEIGHT=' + cellHeight + '>' + digit + '</TD>';
                        digit++
                    }
                }
                text += '</div>';
            }

// close all basic table tags
            return {__html: text};
        }

        return (
            <div className="calendar">
                <div className="calendar-table">
                    <dayName/>
                    {/!*<div dangerouslySetInnerHTML={setCal()}/>*!/}
                </div>
            </div>
        )
    }
};*/
class Month extends Component {
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

        function leapYear(year) {
            if (year % 4 == 0) // basic rule
                return true; // is leap year
            /!* else *!/ // else not needed when statement is "return"
            return false; // is not leap year
        }

        function setCal() {
            let now = new Date();
            let year = now.getYear();
            if (year < 1000) year+=1900;
            let month = numOfMonth;
            let monthName = getMonthName(month);
           /* let date = now.getDate();*/
            now = null;

            let firstDayInstance = new Date(year, month, 1);
            let firstDay = firstDayInstance.getDay();
            firstDayInstance = null;

            let days = getDaysInMonth(month, year);

            return drawCal(firstDay + 1, days, /*date,*/ monthName, year)
        }



        function drawCal(firstDay, lastDate, /*date,*/ monthName, year) {
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
            text += '<div class="month-name">';
            text += '<span COLOR="' + headerColor + '" SIZE=' + headerSize + '>'; // set font for table header
            text += monthName + ' ' + year;
            text += '</span>'; // close table header's font settings
            text += '</div>';
// variables to hold constant settings
            let openCol = '<div class="weekday-name" WIDTH=' + colWidth + ' HEIGHT=' + dayCellHeight + '>';
            openCol += '<span COLOR="' + dayColor + '">';
            let closeCol = '</span></div>';
// create first row of table to set column width and specify week day
            text += '<div class="weekday-names">';
            for (let dayNum = 0; dayNum < 7; ++dayNum) {
                text += openCol + weekDayName[dayNum] + closeCol
            }
            text += '</div>';

// declaration and initialization of two variables to help with tables
            let digit = 1;
            let curCell = 1;

            for (let row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row) {
                text += '<div class="week">';
                for (let col = 1; col <= 7; ++col) {
                    if (digit > lastDate)
                        break;
                    if (curCell < firstDay) {
                        text += '<div class="empty-day"></div>';
                        curCell++
                    } else {
                        if (digit == 'date') { // current cell represent today's date
                            text += '<div HEIGHT=' + cellHeight + '>';
                            text += '<span COLOR="' + todayColor + '">';
                            text += digit;
                            text += '</span><BR>';
                            text += '<span COLOR="' + timeColor + '" SIZE=2>';
                            text += '<span>' + getTime() + '</span>';
                            text += '</span>';
                            text += '</div>';
                        } else
                            text += '<div class="day" HEIGHT=' + cellHeight + '>' + digit + '</div>';
                        digit++
                    }
                }
                text += '</div>';
            }

// close all basic table tags
            return {__html: text};
        }

        return (
            <div className="month" dangerouslySetInnerHTML={setCal()}/>
        )
    }
};

class MonthsHolder extends Component {
    render () {
        var numberYears = 12;
        let year = [];
        for (let i = 0; i < numberYears; i++) {
            year.push(<Month key={i} monthNum={i}/>);
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

