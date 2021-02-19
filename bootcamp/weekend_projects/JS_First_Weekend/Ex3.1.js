/*****************************************************************************
* File Name: Ex3.1.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/19/21 10:10                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
let NBYear = (p0, percentage, aug, pf) => {
    let year = 0;
    while (p0 <= pf)
    {
        ++year;
        p0 += p0 * (percentage / 100) + aug;
    }
    return (year);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('NBYear first result is:');
    console.log(NBYear(1000, 2, 50, 1200));
    console.log('');

    console.log('NBYear second result is:');
    console.log(NBYear(1500, 5, 100, 5000));
    console.log('');

    console.log('NBYear third result is:');
    console.log(NBYear(1500000, 2.5, 10000, 2000000));
    console.log('');

}; MainFunction();