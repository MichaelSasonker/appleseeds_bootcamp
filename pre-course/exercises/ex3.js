/* Ex3 */

//------------------------------------------------------------------//
/* the function checks if the argument is an integer */
function IsInt(num) {
    if (0 === (num % 1))
    {
        return true;
    }
    else
    {
        return false;
    }
 }

 //------------------------------------------------------------------//
/* function that print the number as word */
function PrintAsWord(num)
{
    let switcher = num;
    switch (switcher)
    {
        case 0:
            console.log('ZERO\n');
            break;
        case 1:
            console.log('ONE\n');            
            break;
        case 2:
            console.log('TWO\n');
            break;
        case 3:
            console.log('THREE\n');
            break;
        case 4:
            console.log('FOUR\n');
            break;
        case 5:
            console.log('FIVE\n');
            break;
        case 6:
            console.log('SIX\n');
            break;
        case 7:
            console.log('SEVEN\n');
            break;
        case 8:
            console.log('EIGHT\n');
            break;
        case 9:
            console.log('NINE\n');
            break;
        default:
            console.log('The number is NOT between 0-9!!!\n');
            break; 
    } 
}

//------------------------------------------------------------------//
/* main function that runs the program */
(function()
{
    'use strict';

    let input = require('readline-sync');
    let num = input.question('Please enter an integer between 0-9\n');

    if (!IsInt(num))
    {
        console.log('This is NOT an INTEGER!!!');
        return;
    }
    else
    {
        num = parseInt(num);
        PrintAsWord(num);
    }
}) ();
