/*****************************************************************************
* File Name: languages.js                                                    *
* Section: 7                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/08/21 15:10                                                       *
* Status: done                                                               *
******************************************************************************/

/*****************************************************************************/
/* This function prints the place of the language  */
function PrintMostSpoken(language)
{
    let switcher = language; 

    switch (switcher)
    {
        case 'mandarin':
            console.log('MOST number of native speakers\n');
            break;
        case 'spanish':
            console.log('2nd place in number of native speakers\n');
            break;
        case 'english':
            console.log('3rd place in number of native speakers\n');
            break;
        case 'hindi':
            console.log('4th place in number of native speakers\n');
            break;
        case 'arabic':
            console.log('5th place in number of native speakers\n');
            break;
        default:
            console.log('NOT in top 5 place in number of native speakers\n');
            break;
    }
}

/*****************************************************************************/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';

    let language = 'english';

    PrintMostSpoken(language);

}; MainFunction();