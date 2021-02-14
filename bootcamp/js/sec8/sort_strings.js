/*****************************************************************************
* File Name: sort_strings.js                                                 *
* Section: 8                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/14/21 15:45                                                       *
* Status: done                                                               *
******************************************************************************/

const FOODS = ['falafel', 'sabich', 'hummus', 'pizza with extra pineapple'];
const FOODS_WITH_UPPER_CASE = ['falafel', 'Sabich', 'hummus', 'pizza with extra pineapple'];
const WORDS = ['apple', 'supercalifragilisticexpialidocious', 'hi', 'zoo'];


function MainFunction()
{
    'use strict';

    const ASCEND_STR = FOODS.sort();
    console.log(ASCEND_STR);

    const DESCEND_STR = FOODS.sort().reverse();
    console.log(DESCEND_STR);

    const ASCEND_STR_UPPER = FOODS_WITH_UPPER_CASE.sort();
    console.log(ASCEND_STR_UPPER);

    const DESCEND_STR_UPPER = FOODS_WITH_UPPER_CASE.sort().reverse();
    console.log(DESCEND_STR_UPPER);

    const DESCEND_LONGEST_STR = WORDS.sort( (a,b) => (b.length - a.length));
    console.log(DESCEND_LONGEST_STR);


}; MainFunction();