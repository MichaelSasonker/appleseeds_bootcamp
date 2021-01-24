/* Ex7 */

/*-----------------------------------------------------------------------------*/
/* the function calculate the factorial of num */
function Factorial(num)
{
    'use strict';
    let sum = 1;

    if (num === 0)
    {
        console.log(`The Factorial of ${num} is: 1\n`);
    }
    for (let i = 1; i < num + 1; ++i)
    {
        sum *= i;
    }
    console.log(`The Factorial of ${num} is: ${sum}\n`);
}

/*-----------------------------------------------------------------------------*/
/* the function checks if the argument is an integer */
function IsInt(num)
 {
     'use strict';

    if (0 === (num % 1))
    {
        return true;
    }
    else
    {
        return false;
    }
 }


/*-----------------------------------------------------------------------------*/
/* main func that runs the program */
function MainFunc()
{
    'use strict';

    let input = require('readline-sync');
    let num = input.question('Please enter a positive number:\n');

    num = parseFloat(num);

    if ((isNaN(num)) || (!IsInt(num)) || (num < 0))
    {
        console.log('INVALID INPUT!\n');
    }
    else
    {
        num = parseInt(num);
        Factorial(num);
    }
    
}; MainFunc();
