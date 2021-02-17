
let ArrSort = (arr) => {
    return arr.sort((second_inx, first_inx) => (second_inx - first_inx) )
}

let ArrSortRev = (arr) => {
    return arr.sort((second_inx, first_inx) => (first_inx - second_inx) )
}


function MainFunction()
{
    'use strict';

    let arr1 = [5,2,3,3,7,11,1];

    console.log(ArrSort(arr1));
    console.log(ArrSortRev(arr1));
    
}; MainFunction();