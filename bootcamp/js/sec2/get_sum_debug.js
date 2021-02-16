/*****************************************************************************
* File Name: steps.js                                                        *
* Section: 2                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/16/21 15:40                                                       *
* Status: done                                                               *
******************************************************************************/


function getSum(arr1, arr2)
{ 
    const sum = 0;

    for (let i=0; i < arr1.length; i++)
    {
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++)
    {
        sum += arr2[i];
    }
    //console.log(sum1 + ' ' + sum2);
}


getSum([1,2,3],[5,66,23]);

/* I used the VS coe debbuger terminal */
/* sum is const so we can't change it     
        const sum = 0;                 */

/* missing ',' between these arrays    
    getSum([1,2,3][5,66,23]);          */              