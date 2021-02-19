/*****************************************************************************
* File Name: Ex2.7.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/18/21 23:10                                                       *
* Status: done                                                               *
******************************************************************************/

let BasicOperator = (opr, num1, num2) => {
    switch (opr) {
        case '+':
            return (num1 + num2);
        case '-':
            return (num1 - num2);
        case '*':
            return (num1 * num2);
        case '/':
            return (num2 !== 0) ? parseFloat(num1 / num2) : 'Error'; 
    }
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('BasicOperator first result is:');
    console.log(BasicOperator('+', 8, 9));
    console.log('');

    console.log('BasicOperator second result is:');
    console.log(BasicOperator('-', 8, 9));
    console.log('');

    console.log('BasicOperator third result is:');
    console.log(BasicOperator('*', 8, 9));
    console.log('');

    console.log('BasicOperator fourth result is:');
    console.log(BasicOperator('/', 8, 9));
    console.log('');

    console.log('BasicOperator fifth result is:');
    console.log(BasicOperator('/', 8, 0));
    console.log('');
    
}; MainFunction();