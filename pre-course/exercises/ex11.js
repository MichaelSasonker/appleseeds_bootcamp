/* Ex11 */

/*-----------------------------------------------------------------------------*/
/* function that checks if a string is a palindrome */
function IsPalindrum(str, size_str)
{
    'use strict';

    let flag = 0;

    for (let i = 0; i < size_str / 2; ++i)
    {
        flag = 0;
        if (str[i] != str[size_str -1 -i])
        {
            break;
        }
        else
        {
            flag = 1;
        }
    }
    return (flag);
}

/*-----------------------------------------------------------------------------*/
/* main func thaat runs the program */
function MainFunc()
{
    'use strict';

    let input = require('readline-sync');
    let chalk = require('chalk');
    let str = input.question('Please enter a string:\n');

    let bol_res = 0;
    let size_str = str.length;

    bol_res = IsPalindrum(str, size_str);

    if (bol_res == 1)
    {
        console.log(chalk.greenBright("PALINDROME!"));
    }
    else 
    {
        console.log(chalk.redBright("NOT PALINDROME!"));
    }

}; MainFunc();