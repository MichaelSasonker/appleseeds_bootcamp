/* Ex6 */

/*-----------------------------------------------------------------------------*/
/* func that checks if the input is larger than 10 */
function IsLargerThanTen()
{
    'use strict';

    let bol_res = 1;
    let input = require('readline-sync');
    let num = input.question('Please choose a number larger than 10:\n');

    num = parseFloat(num);
   
    while (bol_res)
    if ((num <= 10) || (isNaN(num))) 
    {
        num = input.question('Please choose a number larger than 10:\n');
        num = parseFloat(num);
        if (num > 10)
        {
            bol_res = 0;
            console.log('Thanks!\n');
            return (bol_res);
        }
    }
    else
    {
        console.log('Thanks!\n');
        return 0;
    }
}

/*-----------------------------------------------------------------------------*/
/* main func that run the program */
function MainFunc()
{
    'use strict';

   IsLargerThanTen();


}; MainFunc();