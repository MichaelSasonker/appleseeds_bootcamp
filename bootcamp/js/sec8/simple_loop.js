/*****************************************************************************
* File Name: simple_loop.js                                                  *
* Section: 8                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/09/21 17:00                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* CONSTS */
const ARR = [1, 7, 3, 0, -5, 7, 3, 9];
const ARR2 = [5, 4, 3, 2, 1];
/*---------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
/* This function print the values of an array */
const PrintArr = (arr) => {
    for (let i = 0; i < arr.length; ++i)
    {
        console.log(arr[i]);
    }
};

/*---------------------------------------------------------------------------*/
/* This function return the legth of an array */
const ArrayLength = (arr) => {
    let size_arr = 0;
    let i = 0;

    while (arr[i] != undefined)
    {
        ++size_arr;
        ++i;
    }

    return (size_arr);
};

/*---------------------------------------------------------------------------*/
/* This function return the sum of an array */
const ArraySum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i)
    {
        sum += arr[i];
    }
    return (sum);
};

/*---------------------------------------------------------------------------*/
/* This function return the multiplication of an array */
const ArrayMultiplication = (arr) => {
    let multiplication = 1;
    for (let i = 0; i < arr.length; ++i)
    {
        multiplication *= arr[i];
    }
    return (multiplication);
};

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';

    PrintArr(ARR);
    console.log(ArrayLength(ARR));

    console.log(ArraySum(ARR));

    console.log(ArrayMultiplication(ARR2));

}; MainFunction();