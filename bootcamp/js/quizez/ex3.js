
function PrintTillRevArr(arr)
{
    for (let i = arr.length -1 ; i >= 0; --i)
    {
        console.log(arr[i]);
    }
}


function MainFunction()
{
    'use strict';

    let arr1 = [1,2,3];

    PrintTillRevArr(arr1);
    
}; MainFunction();