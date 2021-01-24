/* Ex12 */

/*-----------------------------------------------------------------------------*/
const LOWER_LETTERS = 
{   
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u',
    y: 'y'
};

/*-----------------------------------------------------------------------------*/
/* function that prints the string in upper case for letters that 
*  in LOWER_LETTERS                                                             */
function PrintCapitalVowels(str, size_str)
{
    'use strict';
    let cap_str = [];

    let chalk = require('chalk');
    for (let i = 0; i <size_str; ++i)
    {
        if (str[i] in LOWER_LETTERS)
        {
            cap_str[i] = str[i].toUpperCase();
        } 
        else
        {
            cap_str[i] = str[i];
        }
    }
    cap_str = cap_str.join('');
    console.log(chalk.greenBright(cap_str));
}

/*-----------------------------------------------------------------------------*/
/* main func thaat runs the program */
function MainFunc()
{
    'use strict';

    let input = require('readline-sync');
    let str = input.question('Please enter a string:\n');
    let size_str = str.length;

    PrintCapitalVowels(str, size_str);

}; MainFunc();