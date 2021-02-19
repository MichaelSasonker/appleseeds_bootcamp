/*****************************************************************************
* File Name: Ex2.4.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/18/21 21:30                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
let FindUnique = (arr) => {
    
    arr.sort((b,a) => b - a);
    return ((arr[0] !== arr[1]) ? arr[0] : arr[arr.length - 1]);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    let arr1 = [1.5, 1.5, -15, 1.5, 1.5, 1.5];
    let arr2 = [-1.5, -1.5, -1.5, 0, -1.5];
    let arr3 = [2, 2, 2, 0.5, 2, 2];

    console.log('FindUnique first result is:');
    console.log(FindUnique(arr1));
    console.log('');

    console.log('FindUnique second result is:');
    console.log(FindUnique(arr2));
    console.log('');

    console.log('FindUnique third result is:');
    console.log(FindUnique(arr3));
    console.log('');

}; MainFunction();