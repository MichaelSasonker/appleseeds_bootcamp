/*****************************************************************************
* File Name: Ex3.2.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/19/21 10:30                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
let CoountPepoleBus = (arr_of_arr) => arr_of_arr.reduce((acc, curr_val) => acc += curr_val[0] - curr_val[1], 0);

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('NBYear first result is:');
    console.log(CoountPepoleBus([[5,0], [4,2], [2,6]]));
    console.log('');

    console.log('NBYear second result is:');
    console.log(CoountPepoleBus([[10,0], [1,7], [5,5]]));
    console.log('');

    console.log('NBYear third result is:');
    console.log(CoountPepoleBus([[3,0], [4,3], [7,6]]));
    console.log('');

}; MainFunction();