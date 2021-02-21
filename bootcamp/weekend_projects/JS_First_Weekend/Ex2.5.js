/*****************************************************************************
* File Name: Ex2.5.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/18/21 22:00                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function returns the summation until num */ 
let Summation = (num) => {
    let sum = 0;
    let i = 1;

    while (i <= num)
    {
        sum += i;
        ++i;
    }
    return (sum);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('Summation first result is:');
    console.log(Summation(8));
    console.log('');

    console.log('Summation second result is:');
    console.log(Summation(13));
    console.log('');

}; MainFunction();