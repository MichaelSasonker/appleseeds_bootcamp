/*****************************************************************************
* File Name: loop_in_a_loop.js                                               *
* Section: 9                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/16/21 10:00                                                       *
* Status: done                                                               *
******************************************************************************/


const NEIGHBOURS_LIST = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction() 
{
    'use strict';

    for (let i = 0; i < NEIGHBOURS_LIST.length; ++i)
    {
        for (let j = 0; j < NEIGHBOURS_LIST[i].length; ++j)
        {
            console.log(`Neighbour - > ${NEIGHBOURS_LIST[i][j]}`);
        }
    }

}; MainFunction();