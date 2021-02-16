/*****************************************************************************
* File Name: find_smallest_debug.js                                          *
* Section: 2                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/16/21 16:00                                                       *
* Status: done                                                               *
******************************************************************************/

function findSmallest(a, b, c)
{
    if (a < b && a < c)
    {
        return a;
    } 
    else if (b > c && b < a)  
    {
        return b;
    } 
    else 
    {
        return c;
    }
}

console.log(findSmallest(52,66, 2));


/* I used the VS coe debbuger terminal */

/* These two statements are not written in a valid syntax 
        (a > b > c)  (a > c > b)                         */

/* No space between else if statment 
        elseif (a > c > b)             */ 

/* Calling the function not in the correct name
        findSmalest(52,66, 2);                  */

/* The return isn't save in any variable */