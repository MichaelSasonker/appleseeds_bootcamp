/*****************************************************************************
* File Name: Ex8.js                                                          *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/21/21 01:40                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function returns the perimeter of a rectangle */
let FindPerimeterOfRectangle = (len, wid) => ((len + wid) * 2);

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('FindPerimeterOfRectangle first result is:');
    console.log(FindPerimeterOfRectangle(6, 7));
    console.log('');
    
    console.log('FindPerimeterOfRectangle second result is:');
    console.log(FindPerimeterOfRectangle(20, 10));
    console.log('');

    console.log('FindPerimeterOfRectangle third result is:');
    console.log(FindPerimeterOfRectangle(2, 9));
    console.log('');

}; MainFunction();