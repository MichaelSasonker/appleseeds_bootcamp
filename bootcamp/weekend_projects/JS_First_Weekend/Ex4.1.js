/*****************************************************************************
* File Name: Ex4.1.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/19/21 11:30                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
let PrintFibonacci = (num) => {

    let arr = [0, 1];
    let i = 2;
    if (num === 0) 
    {
        return (arr[0]);
    }
    while (i <= num)
    {
        arr.push(arr[i - 1] + arr[i - 2]);
        ++i;
    }
    return (arr);
}
/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('PrintFibonacci first result is:');
    console.log(PrintFibonacci(0));
    console.log('');

    console.log('PrintFibonacci second result is:');
    console.log(PrintFibonacci(10));
    console.log('');

    console.log('PrintFibonacci third result is:');
    console.log(PrintFibonacci(25));
    console.log('');


}; MainFunction();