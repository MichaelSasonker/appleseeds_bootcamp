
function PrintWithMap(arr)
{
    console.log(arr.map((element) => {
        return (element);
    }));

}

function GetNumTimes10(arr)
{
    arr = arr.map((element) => {
        return (element * 10);
    });
    return arr;
}


function OnlyPos(arr)
{
    let arr2 = arr.filter( (element) => element > 0)
    return arr2;
}


function OnlyNeg(arr) {
    return arr.filter( (element) => element < 0)
}

let PrintNevDivide = (arr) => {

    console.log(OnlyNeg(arr).map((element) => element / 2));
}

let PrintPosSort = (arr) => {

    console.log(arr.filter((element) => element >= 0).sort((b, a) => (b - a)));
}

let FindMax = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; ++i)
    {
        (arr[i] >= max) ? max = arr[i] : max; 
    }
    console.log(max);
}

function MainFunction()
{
    'use strict';

    let arr1 = [5,2,3,3,7,11,1];
    let arr2 = [-5,2,3,-3,7,11,1];

    PrintWithMap(arr1);

    console.log(GetNumTimes10(arr1));

    console.log(OnlyPos(arr2));

    console.log(OnlyNeg(arr2));

    PrintNevDivide(arr2);

    PrintPosSort(arr2);

    FindMax(arr2);

}; MainFunction();