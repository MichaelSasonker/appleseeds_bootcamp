/*****************************************************************************
* File Name: maps_with_objects.js                                            *
* Section: 8                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/14/21 10:30                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';

    let obj1 = {
        name: "Jhon",
    }

    let obj2 = {
        name: "Harry",
    }

    let obj3 = {
        name: "Jane",
    }

    let map_obj = new Map();

    map_obj.set(obj1, 1);
    map_obj.set(obj2, 2);
    map_obj.set(obj3, 3);

    for (let obj of map_obj)
    {
        console.log(obj[0].name + '-> ' + obj[1]);
    }

}; MainFunction();