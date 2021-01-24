/* Ex2 */
/* The function asks the user to enter 2 numbers and checks if their sum is equal to 10 */
function IsTen() 
{
    'use strict';

    const TEN = 10.0;

    let input = require('readline-sync'); // unable readline repo
    let num1 = parseFloat(input.question('Please write a number\n')); // 
    let num2 = parseFloat(input.question('Please enter another number\n'));
    
    if (TEN === (num1 + num2))
    {
        console.log("Makes 10\n");
    }   
    else 
    {
        console.log("Nope!\n");
    }

}
IsTen();
