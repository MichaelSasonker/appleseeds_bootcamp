/*****************************************************************************
* File Name: array_basics.js                                                 *
* Section: 8                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/09/21 22:00                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function prints the content of ana array */
const PrintArrContent = (arr) => {
    for (let i = 0; i < arr.length; ++i)
    {
        console.log(arr[i]);
    }
}

/*---------------------------------------------------------------------------*/
/* This function prints the content of an array until it finds 'Mary' */
const PrintUntilMary = (arr) => {
    for (let i = 0; i < arr.length; ++i)
    {
        if (arr[i] === 'Mary')
        {
            console.log("OHHH NOOO!!! IT'S  M A R Y!!!!");
            return 0;
        }
        else 
        {
            console.log(arr[i]);
        }
    }
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';

    let pepole = ['Greg', 'Mary', 'Devon', 'James'];
    
    PrintArrContent(pepole);

    /* To remove the FIRST element of an array, we need to use PEPOLE.shift(); 
       To remove the LAST element of an array, we need to use PEPOLE.pop(); 
       To add a new element to the BEGINNING of an array, we need to use PEOPLE.unshift('Matt');
       To add a new element to the END of an array, we need to use PEOPLE.push('Michael'); */

    PrintUntilMary(pepole);
    PrintUntilMary(['hello', 'yami', 'lalala', 'mary', 'aaa', 'Mary']);

    /* To copy an array without some elements, we can use slice() method, 
       PEPOLE.slice(1) -> will remove the first two elements and will 
       return the rest of the array. */

    /* To find the index of some element in an array, we need to use 
       array.indexOf('element-value'), if there is no 'element-value
       indexOf() method will return -1           */
       
    pepole.splice(2, 1, 'Elizabeth', 'Artie');
    console.log(pepole);

}; MainFunction();