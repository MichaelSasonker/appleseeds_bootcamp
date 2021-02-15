/*****************************************************************************
* File Name: massaging_data_with_map.js                                      *
* Section: 9                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/15/21 22:00                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
const DATA = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

const FOODS_OBJ = 
{
    hamburgers: 0,
    sausages: 0,
    salmon: 0,
    steak: 0,
    lamb: 0,
    tuna: 0,
    barracuda: 0,
    ham: 0,
    chicken: 0,
    pike: 0,
    bird: 0,
    rooster: 0,
    anchovies: 0,
}

/*---------------------------------------------------------------------------*/
/* This function return an array of all the names in an object */ 
let GetNames = (arr_of_obj) => {

    let names_arr = arr_of_obj.map(obj => {
        /* prints all the keys in the first place */
        console.log(Object.keys(obj)[0] + ' -> ' + obj.name);
        return (obj.name);
    })
    return (names_arr);
}

/*---------------------------------------------------------------------------*/
/* This function return an array of all objects that their born year is 
   before the input year                                                */
let GetBornBefore = (arr_of_obj, year) => {
    let res_arr_of_obj = [];

    let obj_res = arr_of_obj.map(obj => {

        /* makes the object's date to be an array of strings without dash(-) */
        let res_arr = obj.birthday.split('-').map((str_date, indx) => {

            let num = parseInt(str_date); /* turns the string date to number */

            /* checks if the number is less than the input year 
               and verify that it is a year                     */
            if (num < year && num > 32) /* 32 -> more than one month days */
            {
                return indx;
            }
            else
            {
                return (-1);
            }
            
        })

        /* if the result array has index of 2 (different from -1) */
        if (res_arr.includes(2))
        {
            return (obj);
        }
        else
        {
            return (null);
        }
    })

    /* for all objects in the array */
    for (let i = 0; i < obj_res.length; ++i)
    { 
        if (obj_res[i] != null)
        {       
            res_arr_of_obj.push(obj_res[i]);
        }
    }

    return (res_arr_of_obj);
}

/*---------------------------------------------------------------------------*/
/* This function increment the value of a specific property */
let GetFoods = (arr_of_obj, dest_obj) => {
    arr_of_obj.forEach(obj => {

        obj.favoriteFoods.meats.forEach(arr_element => {
            /* if the array element has this string */
            if (dest_obj[arr_element] != undefined)
            {
                ++dest_obj[arr_element];
            }
        })
    })
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';

    console.log(' ');

    let names_arr = GetNames(DATA);
    console.log(' ');
    console.log('GetNames result:');
    console.log(names_arr);
    console.log(' ');

    console.log('GetBornBefore result:');
    let res2 = GetBornBefore(DATA, 1990);
    console.log(res2);
    console.log(' ');

    console.log('GetFoods result:');
    GetFoods(DATA, FOODS_OBJ);
    console.log(FOODS_OBJ);
    console.log(' ');

}; MainFunction();