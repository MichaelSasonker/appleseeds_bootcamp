/*****************************************************************************
* File Name: legth_of_strings.js                                             *
* Section: 8                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/10/21 09:20                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function return the length of strings in an array */
const GetLengthOfStringsInArr = (arr) => {

    let size = [];
    for (let i = 0; i < arr.length; ++i)
    {
        size.push(arr[i].length);
    }

    return (size);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction() 
{
    'use strict';

    let arr_of_str = ['boo', 'doooo', 'lo', 'aaaaaa'];

    let arr_of_sizes = [];
    arr_of_sizes = GetLengthOfStringsInArr(arr_of_str);

    console.log(arr_of_sizes);

}; MainFunction();