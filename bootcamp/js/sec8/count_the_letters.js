/*****************************************************************************
* File Name: count_the_letters.js                                            *
* Section: 8                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/10/21 23:00                                                       *
* Status: done                                                               *
******************************************************************************/


const ARR = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

/*---------------------------------------------------------------------------*/
/* This function count the letters of an array */
function CountLetters(arr) 
{
    'use strict';

    let counter = 0;
    let result_obj = {};
    let letter;
    let non_repeat_arr = [];
    let arr_cpy = arr.join('');         /* merge the strings to one string */
    arr_cpy = arr_cpy.toLowerCase();    /* make it lower case              */

    for (let i = 0; i < arr_cpy.length; ++i)
    {
        letter = arr_cpy[i]; 
            /* if there is no letter that is equal to letter variable AND remove space */
        if (!(non_repeat_arr.includes(letter)) && letter != ' ')
        {   /* add to the array the diffrent letter */
            non_repeat_arr.push(letter);
            counter = 1;
                
            for (let j = i + 1; j < arr_cpy.length; ++j)
            {
                if (arr_cpy[j] == letter)
                {
                    ++counter;
                }
            }
            /* create the property and the value in the result object */
            result_obj[letter] = counter;
        }
    }
    return (result_obj);
}

/*---------------------------------------------------------------------------*/
/* This function find the maximum value of an object */
function FindMaxValue(obj)
{   
    let max = 0;
    let index = 0;
    for (let i in obj)
    {
        if (obj[i] >= max)
        {
            max = obj[i];
            index = i;
        }
    }
    return (index);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';
    let res_obj = {};
    res_obj = CountLetters(ARR);
    console.log(res_obj);

    let max_index = FindMaxValue(res_obj);
    console.log('The maximum value is: ' + res_obj[max_index]);

}; MainFunction();