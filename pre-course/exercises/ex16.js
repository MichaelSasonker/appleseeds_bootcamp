/* Ex16 */


/*-----------------------------------------------------------------------------*/
/* function that checks if a number is integer */
function IsInt(num)
{
    'use strict';

    if (num % 1 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

/*-----------------------------------------------------------------------------*/
/* function that turns string to integers */
function ToIntArr(arr, size_arr)
{
    'use strict';

    for (let i = 0; i < size_arr; ++i)
    {
        if (isNaN(parseInt(arr[i])) || (!IsInt(arr[i])))
        {
            console.log("INVALID OUTPUT!!!")
            return (-1);
        }
        arr[i] = parseInt(arr[i]);
    }

    return (arr);
}

/*-----------------------------------------------------------------------------*/
/* function that reverse in place an array of integers and return it */
function ReverseIntArrInPlace(arr, size_arr)
{
    'use strict';

    for (let i = 0; i < size_arr / 2 -  1; ++i)
    {
        arr[i] = arr[i] + arr[size_arr - 1 - i];
        arr[size_arr -1 - i] = arr[i] - arr[size_arr - 1 - i];
        arr[i] = arr[i] - arr[size_arr - 1 - i];
    }

    return (arr);
}

/*-----------------------------------------------------------------------------*/
/* Main func that runs the program */
function MainFunc()
{
    'use strict';

    let input = require('readline-sync');

    let arr1 = input.question('Please enter an array of integers: \n');
    arr1 = arr1.split(" "); 

    let size_arr1 = arr1.length;
    arr1 = ToIntArr(arr1, size_arr1);
    if (arr1 == -1)
    {
        return;
    }
    else
    {
        let res_arr = ReverseIntArrInPlace(arr1, size_arr1);
        console.log(res_arr);
        console.log(typeof(res_arr));
    }   

}; MainFunc();