/*****************************************************************************
* File Name: Ex5.3.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/19/21 14:10                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function returns the sentence in a camel case */
let GetCamelCase = (sentence) => {

    if (sentence.includes('-'))
    {   /* split the sentence to array of words */
        let words_arr = sentence.split('-');

        words_arr = words_arr.map(word => {
            let letter = word.split('');    /* split the words into letters */
            /* for any letter if it's the first index return it as upper case else return the letter*/
            letter = letter.map((letter, index) => (index === 0) ? letter.toUpperCase() : letter)
            word = letter.join('');

            return word;
        });
        /* if the first letter is different from the original remove it and replace it */
        if (words_arr[0][0] != sentence[0])
        {
            let first_word = words_arr.shift();

            first_word = first_word.split('');
            first_word.shift();
            first_word.unshift(sentence[0]);
            first_word = first_word.join('');
            
            words_arr.unshift(first_word);
        }

        words_arr = words_arr.join('');

        return (words_arr);
    }

    else if (sentence.includes('_'))
    {
        let words_arr = sentence.split('_');

        words_arr = words_arr.map(word => {
            let letter = word.split('');
            letter = letter.map((letter, index) => (index === 0) ? letter.toUpperCase() : letter)
            word = letter.join('');

            return word;
        });

        if (words_arr[0][0] != sentence[0])
        {
            let first_word = words_arr.shift();

            first_word = first_word.split('');
            first_word.shift();
            first_word.unshift(sentence[0]);
            first_word = first_word.join('');

            words_arr.unshift(first_word);
        }

        words_arr = words_arr.join('');

        return (words_arr);
    }
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('GetCamelCase first result is:');
    console.log('the-stealth-warrior' + ' --> ' + GetCamelCase('the-stealth-warrior'));
    console.log('');

    console.log('GetCamelCase second result is:');
    console.log('The_Stealth_Warrior' + ' --> ' + GetCamelCase('The_Stealth_Warrior'));
    console.log('');

    console.log('GetCamelCase third result is:');
    console.log('hello-My-Name' + ' --> ' + GetCamelCase('hello-My-Name'));
    console.log('');

    console.log('GetCamelCase fourth result is:');
    console.log('Hello-My-Name' + ' --> ' + GetCamelCase('Hello-My-Name'));
    console.log('');

}; MainFunction();