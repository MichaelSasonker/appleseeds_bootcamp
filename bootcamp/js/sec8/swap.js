/*****************************************************************************
* File Name: swap.js                                            *
* Section: 8                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/11/21 15:00                                                       *
* Status: done                                                               *
******************************************************************************/



/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';

    let obj = {
        name: 'Jhon',
        age: 30,
        department: 'Development',
    };

    function SwapPropertiesAndValues(obj)
    {
        Object.entries(obj).forEach(element => {
            let key = element[0];
            let value = element[1];
            obj[value] = key;
        });
    }

    SwapPropertiesAndValues(obj);
    console.log(obj);

}; MainFunction();