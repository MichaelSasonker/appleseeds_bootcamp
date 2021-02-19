/*****************************************************************************
* File Name: Ex1.1.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/18/21 10:50                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function gets a boolean variable and return if it true or false */ 
let IsTrue = (bool_val) => {
    return ((typeof(bool_val) === 'boolean')  /* verify that it's a boolean var */
    ? ((bool_val === true)                      
        ? 'Yes' 
        : 'No')
    : ('NOT a boolean variable!!!'));         /* if it's not a boolean var */
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('IsTrue first result is:');
    console.log(IsTrue(true));
    console.log('');

    console.log('IsTrue second result is:');
    console.log(IsTrue(false));
    console.log('');

    console.log('IsTrue third result is:');
    console.log(IsTrue('true'));
    console.log('');

}; MainFunction();