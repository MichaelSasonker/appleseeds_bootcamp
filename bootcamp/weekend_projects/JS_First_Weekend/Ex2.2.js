/*****************************************************************************
* File Name: Ex2.2.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/18/21 14:00                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function return the decimal value of an array of bits */
let FromBinaryToDec = (arr) => {
    let index_arr = [];
    /* reversing the array! */
    for (let i = 0; i < (arr.length - 1) / 2; ++i)
    {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    for (let i = 0; i < arr.length; ++i)
    {   /* if the bit is on return the index of it */
        if (arr[i] === 1)
        {
            index_arr.push(i);
        }
    }
            /* for all indexes that are on return 2  ** index */
    return (index_arr.reduce((acc, curr_val) => acc += 2 ** curr_val, 0));
}

/*---------------------------------------------------------------------------*/

let FromBinaryToDecWithRev = (arr) => {
    let index_arr = [];

    arr = arr.reverse();

    arr.forEach((element,index) => {(element === 1) ? index_arr.push(index) : null;});

    return (index_arr.reduce((acc, curr_val) => acc += 2 ** curr_val, 0));
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    let arr1 = [1, 1, 1, 1, 1, 1, 1, 0];
    let arr2 = [1, 0, 1, 1];
    let arr3 = [1, 1, 1, 1, 1, 1, 1, 0];
    let arr4 = [1, 0, 1, 1];

    console.log('FromBinaryToDec first result is:');
    console.log(FromBinaryToDec(arr1));
    console.log('');

    console.log('FromBinaryToDec second result is:');
    console.log(FromBinaryToDec(arr2));
    console.log('');

    console.log('FromBinaryToDecWithRev first result is:');
    console.log(FromBinaryToDecWithRev(arr3));
    console.log('');

    console.log('FromBinaryToDecWithRev second result is:');
    console.log(FromBinaryToDecWithRev(arr4));
    console.log('');

}; MainFunction();