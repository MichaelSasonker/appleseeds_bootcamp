/*****************************************************************************
* File Name: sort_numbers.js                                                 *
* Section: 8                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/14/21 15:30                                                       *
* Status: done                                                               *
******************************************************************************/

const ARR = [1, -5, 666, 2, 400, 11];

function MainFunction()
{
    'use strict';

    /* This var is the sorted array in ascending order (the first index is the second index!) */
    const AscendArr = ARR.sort( (second_inx, first_inx) => (second_inx - first_inx) ) 
    console.log(AscendArr);

    /* This var is the sorted array in descending order (the first index is the second index!) */
    const DescendArr = ARR.sort( (second_inx, first_inx) => (first_inx - second_inx) ) 
    console.log(DescendArr);

}; MainFunction();
