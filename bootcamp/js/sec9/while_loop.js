/*****************************************************************************
* File Name: while_loop.js                                                   *
* Section: 9                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/16/21 11:00                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
const ARR = ['boo', 'doooo', 'hooo', 'ro'];

/*---------------------------------------------------------------------------*/
/* This function count the letters of an array of strings and return
    a n array of these numbers                                          */ 
let CountLetters = (arr_of_str) => {
    let res_arr = [];
    let i = 0;

    while (i < arr_of_str.length)
    {
        let counter = 0;
        let j = 0;

        while (j < arr_of_str[i].length)
        {
            ++counter;
            ++j;
        }

        res_arr.push(counter);
        ++i;
    }
    return (res_arr);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('CountLetters result:');
    console.log(CountLetters(ARR));
    console.log('');

}; MainFunction();