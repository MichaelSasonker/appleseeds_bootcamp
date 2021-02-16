/*****************************************************************************
* File Name: compare_two_arr.js                                              *
* Section: 9                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/16/21 12:30                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
const FOODS1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const FOODS2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
const FOODS3 = ["Faaarieaaas", "Iceaaa-cream", "Pizaaaza", "Olivaaaes", "Hamburgersass"];

/*---------------------------------------------------------------------------*/
/* This function gets to arrays and return all the even values in an array */ 
let ArrCmp = (arr1, arr2) => {

    let res_arr = [];

    if (arr1.length >= arr2.length)
    {
        for (let i = 0; i < arr1.length; ++i)
        {
            /* if arr1.includes(arr2[i]) -> res_arr.push(arr2[i]); */
            (arr1.includes(arr2[i])) 
            ? res_arr.push(arr2[i]) 
            : null;
        }
    }

    else
    {
        for (let i = 0; i < arr2.length; ++i)
        {
            // if arr2.includes(arr1[i]) -> res_arr.push(arr1[i]);
            (arr2.includes(arr1[i])) 
            ? res_arr.push(arr1[i]) 
            : null;                      
        }
    }

    return (res_arr.length != 0) ? res_arr : 'False';
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('ArrCmp first result:');
    console.log(ArrCmp(FOODS1, FOODS2));
    console.log('');

    console.log('ArrCmp second result:');
    console.log(ArrCmp(FOODS1, FOODS3));
    console.log('');
}; MainFunction();