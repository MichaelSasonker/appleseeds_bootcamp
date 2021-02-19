/*****************************************************************************
* File Name: Ex2.6.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/18/21 22:10                                                       *
* Status: done                                                               *
******************************************************************************/

let CenturyFromYear = (num) => ((num % 1 !== 0) ? 'INVALID INPUT!!!'
    : ((num / 100) % 1 !== 0) ? Math.floor((num / 100 + 1)) : (num / 100));

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('CenturyFromYear first result is:');
    console.log(CenturyFromYear(8));
    console.log('');

    console.log('CenturyFromYear second result is:');
    console.log(CenturyFromYear(1721));
    console.log('');

    console.log('CenturyFromYear third result is:');
    console.log(CenturyFromYear(0));
    console.log('');

    console.log('CenturyFromYear fourth result is:');
    console.log(CenturyFromYear(3302));
    console.log('');



}; MainFunction();