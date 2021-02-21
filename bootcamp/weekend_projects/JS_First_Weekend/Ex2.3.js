/*****************************************************************************
* File Name: Ex2.3.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/18/21 20:40                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function find the next perfect square */ 
let FindNextSquare = (num) => {

    let base = Math.sqrt(num);
    /* if base is float number */
    if (base % 1 !== 0)
    {
        return (-1);
    }
    else 
    {
        let next = base + 1; 
        next *= next;
        return (next);
    }

}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('FindNextSquare first result is:');
    console.log(FindNextSquare(9));
    console.log('');

    console.log('FindNextSquare second result is:');
    console.log(FindNextSquare(-9));
    console.log('');

    console.log('FindNextSquare third result is:');
    console.log(FindNextSquare(9.5));
    console.log('');

}; MainFunction();