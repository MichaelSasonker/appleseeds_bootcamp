/*****************************************************************************
* File Name: Ex5.2.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/19/21 14:00                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function returns the str num times */
let RepeatStr = (num, str) => {
    
    let res = '';
    let i = 0;
    while (i < num)
    {
        res += str;
        ++i;
    }

    return (res);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('RepeatStr first result is:');
    console.log(RepeatStr(10, 'Hello'));
    console.log('');

    console.log('RepeatStr second result is:');
    console.log(RepeatStr(20, ' /\\ \\/ '));
    console.log('');

    console.log('RepeatStr third result is:');
    console.log(RepeatStr(5, ' *|* '));
    console.log('');


}; MainFunction();