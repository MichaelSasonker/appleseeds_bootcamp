/*****************************************************************************
* File Name: jumpers.js                                                      *
* Section: 8                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/10/21 09:45                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function returns an array of the average jumps */
const AvgJumps = (arr, jumps_number) => {
    let avg_arr = [];
    let sum = 0;
    let counter = 0;

    for (let j = 0; j < arr.length; j += 3)
    {
        sum = 0;
        counter = 0;

        for (let i = 0; i < jumps_number; ++i)
        {
            if (arr[j + i] === -1)
            {
                sum = sum;
                ++counter;
            }
            else 
            {
                sum += arr[j + i];
            }
        }

        avg_arr.push(parseFloat(sum / (jumps_number - counter)));
    }
    
    return (avg_arr);
}

/*---------------------------------------------------------------------------*/
/* This function returns the maximum value of an array */
const ReturnMaxValue = (arr) => {
    let max = 0;

    for (let i = 0; i < arr.length; ++i)
    {
        if (arr[i] >= max)
        {
            max = arr[i];
        }
    }
    return (max);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction() 
{
    'use strict';

    let jumpers = [1, 5, 6, 8, -1, -1, 5, 3, -1, -1, 10, 7];
    let res = [];
    let max_val = 0;
    let max_val2 = 0;

    res = AvgJumps(jumpers, 3);
    console.log(res);

    max_val = ReturnMaxValue(res);
    console.log(max_val);

    max_val2 = ReturnMaxValue(jumpers)
    console.log(max_val2);

}; MainFunction();