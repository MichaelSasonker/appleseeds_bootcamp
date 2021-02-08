/*****************************************************************************
* File Name: leap_year.js                                                   *
* Section: 7                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/08/21 13:10                                                       *
* Status: done                                                               *
******************************************************************************/

function IsLeapYear(year) 
{
    'use strict';

    if (year % 4 === 0)
    {
        if (year % 100 === 0)
        {
            if (year % 400 === 0)
            {
                console.log('\nLeap year\n');
            }
            else 
            {
                console.log('\nNot a leap year\n');
            }
        }

        else
        {
            console.log('\nLeap year\n');
        }
    }

    else
    {
        console.log('\nNot a leap year\n');
    }
}

/*****************************************************************************/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';

    let year = window.prompt('Please enter the year: ');
    year = parseInt(year);
    
    IsLeapYear(year);

}; MainFunction();