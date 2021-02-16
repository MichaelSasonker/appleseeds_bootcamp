/*****************************************************************************
* File Name: average_debug.js                                                *
* Section: 2                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/16/21 17:00                                                       *
* Status: done                                                               *
******************************************************************************/


function calcAverage(arr)
{
    let sum = 0;
    for (var i = 0; i < arr .length; i++)
    {
        sum += arr[i];
    }
    return sum ;
}
console.log(calcAverage ([85, 90, 92]));

/* I used the VS coe debbuger terminal */

/* Sum is not defiened & using let is better
        var sum;                             */

/* The return isn't save in any variable */