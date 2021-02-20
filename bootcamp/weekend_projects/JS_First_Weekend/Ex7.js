/*****************************************************************************
* File Name: Ex7.js                                                          *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/21/21 01:10                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
let MyFilter = (arr, CallbackFunc) => {
    let new_arr = [];

    for (let i = 0; i < arr.length; ++i) 
    {
        if (CallbackFunc(arr[i]))  
        {
            new_arr.push(arr[i]);
        }
    }
    return (new_arr);
}

/*---------------------------------------------------------------------------*/
let MyMap = (arr, CallbackFunc ) => {
    let new_arr = [];

    for (let i = 0; i < arr.length; ++i) 
    {
        new_arr.push(CallbackFunc(arr[i]));
    }
    return (new_arr);
}
    
/*---------------------------------------------------------------------------*/
let MyForEach = (arr, CallbackFunc) => {
    for (let i = 0; i < arr.length; ++i) 
    {
        arr[i] = CallbackFunc(arr[i]);
    }
    console.log(arr);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('MyForEach first result is:');
    console.log(MyForEach([1, 2, 3, 4, 5], x => x * 10) + ' --> ' + " forEach does NOT return enthing!");
    console.log('');
    
    console.log('MyForEach second result is:');
    console.log(MyForEach([1, 2, 3, 4, 5], x => x + 5) + ' --> ' + " forEach does NOT return enthing!");
    console.log('');

    console.log('MyMap first result is:');
    console.log(MyMap([1, 2, 3, 4, 5], x => x * 10) + ' --> ' + " map DOES return an array!");
    console.log('');

    console.log('MyMap second result is:');
    console.log(MyMap([1, 2, 3, 4, 5], x => x + 5) + ' --> ' + " map DOES return an array!");
    console.log('');

    console.log('MyFilter first result is:');
    console.log(MyFilter([1, 2, 3, 4, 5], x => x > 1) + ' --> ' + " filter DOES return an array!");
    console.log('');

    console.log('MyFilter second result is:');
    console.log(MyFilter([1, 2, 3, 4, 5], x => x <= 1) + ' --> ' + " filter DOES return an array!");
    console.log('');

}; MainFunction();