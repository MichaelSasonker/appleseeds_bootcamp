/*****************************************************************************
* File Name: foreach_mapping.js                                              *
* Section: 9                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/15/21 18:00                                                       *
* Status: done                                                               *
******************************************************************************/

const ARR = [-5, 10, 15, 20, 30, 40, -5];
const ARR2 = ['aba', 10, 15, 20, 30, 40, '-5'];
const STR = 'AbafEedhioughtTee';

/*---------------------------------------------------------------------------*/
/* This function returns an array with the values doubled of the input arr */
let DoubleValues = (arr) => {
    let dest_arr = arr.map(element => {
        return (element * 2);
    });

    return (dest_arr);
}

/*---------------------------------------------------------------------------*/
/* This function returns an array of only the evan values of the input arr */
let EvenValues = (arr) => {
    let dest_arr = [];

    arr.forEach(element => {
        if (element % 2 === 0)
        {
            dest_arr.push(element);
        }
    });

    return (dest_arr);
}

/*---------------------------------------------------------------------------*/
/* This function returns an array of the first and last value in an array */
let ShowFirstAndLast = (arr) => {
    let dest_arr = [];

    arr.forEach((element, index) => {
        if ((index == (arr.length - 1) || index == 0) && typeof(arr[index]) == 'string')
        {
            dest_arr.push(element);
        }
    });

    return (dest_arr);
}

/*---------------------------------------------------------------------------*/
/* This function counts all the vowel letters of a string and returns an object
   with the counts of each letter                                            */
let VowelCount = (str) => {
    let dest_obj = {a:0, e:0, i:0, o:0, u:0, y:0,};

    let lower_arr = str.toLowerCase();
    lower_arr = lower_arr.split('');

    lower_arr.forEach(letter => {
        /* if we find vowel letter increment his property */
        if (dest_obj[letter] != undefined)
        {
            ++dest_obj[letter];
        }
    })

    return (dest_obj);
}

/*---------------------------------------------------------------------------*/
/* This function capitalize a sentence and return it */
let CapitalizeStr = (sentence) => {

    let arr_of_str = sentence.split(' ');     /* turns the sentence to array of strings (words) */

    arr_of_str = arr_of_str.map(word => {
        let letter = word.split('');        /* turns the words to array of charechters (letters) */

        letter = letter.map(ch => {
            if (ch >= 'a' && ch <= 'z')     /* checks if it is a lower letter */
            {
                                         
                     /* take the number (97 -32 for example) and turns it to the 
                        charecter value in the ASCII table   */
                        /*      |  */                        
                        /*      |  */ /* output the ASCII code of the letter */            
                        /*      |  */      /* | */
                ch = String.fromCharCode(ch.charCodeAt() - 32); 
            }

            return (ch);             
         });

         word = letter.join(''); /* turns it back to words */
         return (word);
     });

     sentence = arr_of_str.join(' '); /* turns it back to sentence */
     return (sentence);
}

/*---------------------------------------------------------------------------*/
/* This function shift a letter to the next one in the alphabet */
let ShiftLetters = (str) => {

    str = str.split('');
    str = str.map(letter => {
        letter = String.fromCharCode(letter.charCodeAt() - 1); 
        return (letter);
    });

    str = str.join('');    
    return str;
}

/*---------------------------------------------------------------------------*/
/* This function swap every other word in a sentence */
let SwapCase = (sentence) => {

    let words = sentence.split(' ');

    let res = words.map((word,index) => {
        if (index % 2 != 0)
        {
            word = CapitalizeStr(word);
        }
        return (word);
    });

    sentence = words.join(' ');    
    return res;
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';
    console.clear;

    console.log('DoubleValues result:')
    let dbl_arr = DoubleValues(ARR);
    console.log(dbl_arr);
    console.log('\n');

    console.log('EvenValues result:')
    let even_arr = EvenValues(ARR);
    console.log(even_arr);
    console.log('\n');

    console.log('ShowFirstAndLast first result:')
    let first_last_arr = ShowFirstAndLast(ARR);
    console.log(first_last_arr);
    console.log('\n');

    console.log('ShowFirstAndLast second result:')
    let first_last_arr_2 = ShowFirstAndLast(ARR2);
    console.log(first_last_arr_2);
    console.log('\n');

    console.log('VowelCount result:')
    let Vowel_obj = VowelCount(STR);
    console.log(Vowel_obj);
    console.log('\n');

    console.log('CapitalizeStr result:');
    console.log(CapitalizeStr("aaAaabBf FfgsD12gf3sdgda babaABa"));
    console.log('\n');

    console.log('ShiftLetters result:');
    console.log(ShiftLetters('aaAaabBfFfgsD12gf3sdgd'));
    console.log('\n');

    console.log('SwapCase result:');
    console.log(SwapCase("aaAaabBf FfgsD12gf3sdgda babaABa"));
    console.log('\n');

}; MainFunction();