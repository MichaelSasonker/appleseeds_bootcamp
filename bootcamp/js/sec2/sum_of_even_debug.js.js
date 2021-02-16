/*****************************************************************************
* File Name: sum_of_even_debug.js                                            *
* Section: 2                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/16/21 16:00                                                       *
* Status: done                                                               *
******************************************************************************/


function getSumOfEven(arr)
{
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}

console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));

/* I used the VS coe debbuger terminal */

/* There is no arr[10] -> last arr index is 9 
    return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];   */

/* The return isn't save in any variable */