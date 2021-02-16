/*****************************************************************************
* File Name: steps.js                                                        *
* Section: 9                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/16/21 14:30                                                       *
* Status:                                                                    *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function prints the steps */
let Steps = (n) => {
    let str = '';

    for (let i = 1; i <= n; ++i)
    {
        for (let j = i; j <= i; ++j)
        {
            str += '#' ;
        }
        console.log(str);
    }
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';

    Steps(7);

}; MainFunction();