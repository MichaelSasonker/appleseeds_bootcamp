/*****************************************************************************
* File Name: Ex2.1.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/18/21 11:00                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function gets ana array and return the sum of the two lowest numbers * 
 * Minimum array length is 4                                                 */ 
let SumTwoLowest = (arr) => {

    let cpy_arr = arr.filter((element) => ((element >= 0) && (element % 1 === 0)));

    if (cpy_arr.length < 4)
    {
        return 'NOT a valid input!';
    }
    
    cpy_arr.sort((b, a) => b - a);

    return (cpy_arr[0] + cpy_arr[1]);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    let arr1 = [3, 4, 5, 1, 8];
    let arr2 = [0, 1, 3, 5, 27, 22];
    let arr3 = [100, 23, 29, 78];
    let arr4 = [3, 4, 5, -1, -3];
    let arr5 = [3, 4, 5, -8, 7];

    console.log('SumTwoLowest first result is:');
    console.log(SumTwoLowest(arr1));
    console.log('');

    console.log('SumTwoLowest second result is:');
    console.log(SumTwoLowest(arr2));
    console.log('');

    console.log('SumTwoLowest third result is:');
    console.log(SumTwoLowest(arr3));
    console.log('');

    console.log('SumTwoLowest fourth result is:');
    console.log(SumTwoLowest(arr4));
    console.log('');

    console.log('SumTwoLowest fifth result is:');
    console.log(SumTwoLowest(arr5));
    console.log('');

}; MainFunction();