/* Ex9 */

/*-----------------------------------------------------------------------------*/
/* function that checks if a number is positive integer */
function IsPosInt(num)
{
    'use strict';

    num = parseFloat(num);

    if ((isNaN(num)) || (!IsInt(num)) || (num < 0))
    {
        console.log('INVALID INPUT!\n');
        return false;
    }
    else
    {
        num = parseInt(num);
        return (num);
    }
}

/*-----------------------------------------------------------------------------*/
/* function that checks if a number is integer */
function IsInt(num)
 {
     'use strict';

    if (num % 1 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
 }

/*-----------------------------------------------------------------------------*/ 
/* function that prints only prime numbers from 0 to some number*/
function PrintPrimeNumbers(num)
{
    'use strict';
    
    let flag, j, i;    

    for (i = 1; i <= num; ++i)
    {
        if (i == 0 || i == 1)
        {
            continue;
        }

        flag = 1;
        for (j = 2; j <= i / 2; ++j)
        {
            if (i % j == 0)
            {
                flag = 0;
                break;
            }
        }
        if (flag == 1)
        {
            console.log(i);
        }
    }
}

/*-----------------------------------------------------------------------------*/
/* main func that runs the program */
function MainFunc()
{
    'use strict';
    
    let input = require('readline-sync');
    let num = input.question('Please enter a positive integer:\n') ;

    if (num == 0)
    {
        console.log(0);
    }
    else if (IsPosInt(num))
    {
        PrintPrimeNumbers(num);
    }
    else    
    {
        return;
    }

}; MainFunc();