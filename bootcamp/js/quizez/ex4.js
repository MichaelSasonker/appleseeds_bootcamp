
let PrintSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i)
    {
        sum += arr[i];
    }
    console.log(sum);
}

function MainFunction()
{
    'use strict';

    let arr1 = [1,2,3];

    PrintSum(arr1);
    
}; MainFunction();