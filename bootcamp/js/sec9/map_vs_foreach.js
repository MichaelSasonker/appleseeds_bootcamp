/*****************************************************************************
* File Name: map_vs_foreach.js                                               *
* Section: 9                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/15/21 10:40                                                       *
* Status: done                                                               *
******************************************************************************/

const NEW_REALESES = [
    {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],bookmark: [],
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [
            {
                id: 432534,
                time: 65876586
            }],
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [
            {
                id: 432534,
                time: 65876586
            }],
    },
];

/*---------------------------------------------------------------------------*/
/* This function gets the id and the name from an array of objects and push
   it to a new array of objects using forEach                                */
let GetIdAndNameWithForeach = (arr, dest_arr) => {
    arr.forEach((element) => {
        dest_arr.push({id: element.id, name: element.title});
    })
}

/*---------------------------------------------------------------------------*/
/* This function gets the id and name from an array of objects and save it 
   in a new array using map                                                 */
let GetIdAndNameWithMap = (arr, dest_arr) => {
    dest_arr = arr.map(element => {
        return ({id: element.id, name: element.title});
    })
    console.log(dest_arr);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';
    console.clear;

    let dest_arr = [];
    GetIdAndNameWithForeach(NEW_REALESES, dest_arr);
    console.log(dest_arr);
    
    let dest_arr2 = [];
    GetIdAndNameWithMap(NEW_REALESES, dest_arr2);

}; MainFunction();