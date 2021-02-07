
/*---------------------------------------------------------------------------*/
/* This function return the current date */
function PrintCurrentDate()
{
    let d = new Date();

    let current_day = ReturnCurrentDay();
    let current_day_in_month = d.getDate();
    let current_month = ReturnCurrentMonth();
    let current_year = d.getFullYear();
    
    let result = `Today is ${current_day} the ${current_day_in_month} of ${current_month}, ${current_year}`;

    return (result);
}

/*---------------------------------------------------------------------------*/
/* This function return the current day */
function ReturnCurrentDay() 
{
    let d = new Date();
    let week_day = new Array();
    week_day[0] = "Sunday";
    week_day[1] = "Monday";
    week_day[2] = "Tuesday";
    week_day[3] = "Wednesday";
    week_day[4] = "Thursday";
    week_day[5] = "Friday";
    week_day[6] = "Saturday";

    let result = week_day[d.getDay()];

    return (result);
}

/*---------------------------------------------------------------------------*/
/* This function return the current month */
function ReturnCurrentMonth() 
{
    let d = new Date();
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    let result = month[d.getMonth()];

    return (result);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction ()
{
    'use strict';

    let current_date = PrintCurrentDate();
    console.log(current_date);

}; MainFunction();