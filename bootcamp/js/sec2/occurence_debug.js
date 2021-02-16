/*****************************************************************************
* File Name: occurence_debug.js                                              *
* Section: 2                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/16/21 17:10                                                       *
* Status: done                                                               *
******************************************************************************/



function countOccurrences(str, char)
{
    let counter = 0;
    for (let i = 0; i < str.length; i++)
    {
        if (str.charAt(i) === char)
        {
            ++counter;
        }
    }
    return counter ;
}

console.log(countOccurrences("ini mini miny moe", "n"));   

/* I used the VS coe debbuger terminal */

/* Missing ')' in the end of the raw
    countOccurrences("ini mini miny moe", "n") */

/* Assignment is invalid!
    counter + 1;                               */

/* The return isn't save in any variable */