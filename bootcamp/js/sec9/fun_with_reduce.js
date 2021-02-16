/*****************************************************************************
* File Name: fun_with_reduce.js                                              *
* Section: 9                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/15/21 00:30                                                       *
* Status: done                                                               *
******************************************************************************/

const ARR = [10, 200, -3, 2, 0, 82, 178, -2, 2001];

function MainFunction()
{
    'use strict';

    let MaxFunc = (max, current_val) => {
        if (max <= current_val)
        {
            max = current_val;
        }
        return (max);
    }
    console.log('MaxFuc result:');
    console.log(ARR.reduce(MaxFunc, ARR[0]));

    let SumEven = (sum, current_val) => {
        /* if (current_val % 2 === 0) -> sum += current_val; -> return (sum); */
        return ((current_val %2 === 0) ? sum += current_val : sum)
    }

    console.log('SumEven result:');
    console.log(ARR.reduce(SumEven, 0));

    console.log('Avg result:');
    console.log(ARR.reduce((sum, current_val) => {
        return (sum + current_val);
    }, 0) / ARR.length);


}; MainFunction();
