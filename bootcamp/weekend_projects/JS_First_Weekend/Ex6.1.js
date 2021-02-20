/*****************************************************************************
* File Name: Ex6.1.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/20/21 21:10                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
let Accum = (str) => {

    let letter_arr = str.split('');

    letter_arr = letter_arr.map((letter, index) => {
        let new_letter = '';
        let i = 0;
        
        while (i <= index)
        {
            if (i === 0)
            {
                new_letter += letter.toUpperCase();
            }
            else
            {
                new_letter += letter;
            }
            ++i;
        }
        return (new_letter);
    });
    
    return letter_arr.join('-');    
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('Accum first result is:');
    console.log('abcd' + ' --> ' + Accum('abcd'));
    console.log('');

    console.log('Accum second result is:');
    console.log('Rqaezty' + ' --> ' + Accum('Rqaezty'));
    console.log('');

}; MainFunction();