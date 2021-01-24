/* Ex10 */

/*-----------------------------------------------------------------------------*/
/* function that prints asterisks instead of spaces in a string */
function PrintAsteriskInsteadSpace(org_str, size_str, cpy_str)
{
    'use strict';

    let chalk = require('chalk');

    for (let i = 0; i < size_str; ++i)
    {
        if (org_str[i] == " ")
        {
            cpy_str[i] = "*";
        }
        else 
        {
            cpy_str[i] = org_str[i];
        }   
    }

    cpy_str = cpy_str.join('');
    console.log(chalk.whiteBright('----------------------------------------------------------------'));
    console.log(chalk.redBright('The string after the change is:\n' + cpy_str));
}

/*-----------------------------------------------------------------------------*/
/* main func that runs the program */
function MainFunc()
{
    'use strict';

    let input = require('readline-sync');
    let org_str = input.question('Please enter some sentence:\n');

    let chalk = require('chalk');
    let size_str = org_str.length;
    let cpy_str = []; 

    console.log(chalk.whiteBright('----------------------------------------------------------------'));
    console.log(chalk.greenBright('The original string is:\n' + org_str));
    PrintAsteriskInsteadSpace(org_str, size_str, cpy_str);

}; MainFunc();