/*****************************************************************************
* File Name: library.js                                                      *
* Section: 9                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/15/21 23:00                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
const LIBRARY = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];

/*---------------------------------------------------------------------------*/
/* This function prints all the objects that has this value */
let PrintObjectWithFilter = (arr_of_obj) => {

    let arr_res = arr_of_obj.filter(obj => {

        return (obj.readingStatus === true)
    })
    console.log(arr_res);
}

/*---------------------------------------------------------------------------*/
/* This function prints only the first object */
let PrintObjectWithFind = (arr_of_obj) => {

    let arr_res = arr_of_obj.find(obj => {

            return (obj.readingStatus === true)
        })
    console.log(arr_res);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('PrintObjectWithFilter result:');
    PrintObjectWithFilter(LIBRARY);
    console.log('');

    console.log('-------------------------------------');

    console.log('PrintObjectWithFind result:')
    PrintObjectWithFind(LIBRARY);
    console.log('');

}; MainFunction();