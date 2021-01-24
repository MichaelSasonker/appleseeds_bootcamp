/* Ex13 */

/*-----------------------------------------------------------------------------*/
/* function that copy a string to dest_str */
function StringCopy(org_str, size_str, dest_str)
{
    'use strict';
    for (let i = 0; i < size_str; ++i)
    {
        dest_str[i] = org_str[i];
    }
    return (dest_str);
}

/*-----------------------------------------------------------------------------*/
/* function that gets a string and return the string without symbols or numbers */ 
function ToOnlyLetters(org_str, size_str)
{
    'use strict';
    let cpy_str = [];

    for (let i = 0; i < size_str; ++i)
    {   // if it's a letter copy it else ignore it 
        if ((org_str[i] >= 'A' && org_str[i] <= 'Z') || (org_str[i] >= 'a' && org_str[i] <= 'z'))
        {
            cpy_str[i] = org_str[i];
        }
    }
    cpy_str = cpy_str.join(''); // join it to one word
    return (cpy_str);
}

/*-----------------------------------------------------------------------------*/
/* function that print the longest word that in org_str.  
*  if the length of two words is equal it'll print the last word */
function PrintLongestWord(org_str, size_str)
{
    'use strict';
    let longest_word_size = 0;
    let place_long = 0;
    let string_copy_str = [];
    let to_only_letters_str = [];

    let chalk = require('chalk');
    let str_split = org_str.split(' '); // split the string to words

    // copy the original string
    string_copy_str = StringCopy(str_split, str_split.length, string_copy_str);

    for (let i = 0; i < string_copy_str.length; ++i)
    {   // send to the function the words and save only the letters 
        to_only_letters_str[i] = ToOnlyLetters(string_copy_str[i], string_copy_str[i].length)
    }
    
    for (let i = 0; i < to_only_letters_str.length; ++i)
    {   // if the length of the word is bigger then longest_word save his place and replace it
        if (to_only_letters_str[i].length >= longest_word_size)
        { 
            place_long = i;
            longest_word_size = to_only_letters_str[i].length;
        }
    }
    console.log('\nThe longest word is: ' + chalk.yellowBright(to_only_letters_str[place_long]));  
}

/*-----------------------------------------------------------------------------*/
/* main func thaat runs the program */
function MainFunc()
{
    'use strict';

    let input = require('readline-sync');
    let str = input.question('Please Enter a string:\n');
    let size_str = str.length;

    PrintLongestWord(str, size_str);

}; MainFunc();