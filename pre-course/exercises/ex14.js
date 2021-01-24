/* Ex14 */


/*-----------------------------------------------------------------------------*/
/* Function that prints the minium and the maximum number in the array */
function PrintMinMAx(arr, arr_size)
{
    'use strict';
    let chalk = require('chalk');

    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr_size; ++i)
    {
        if (arr[i] >= max)
        {
            max = arr[i];
        }
        if (arr[i] <= min)
        {
            min = arr[i]
        }
    }

    console.log('The MAXIMUM is: ' + chalk.blueBright(max));
    console.log('The MINIMUM is: ' + chalk.redBright(min));
}

/*-----------------------------------------------------------------------------*/
/* Function that generate random integers between 1 to 50 */
function RandomIntegers(arr, arr_size)
{
    'use strict';

    for (let i = 0; i < arr_size; ++i)
    {
        arr[i] = Math.floor(Math.random() * 50) + 1;
    }
    return (arr);
}

/*-----------------------------------------------------------------------------*/
/* function that checks if a number is positive integer */
function IsPosInt(num)
{
    'use strict';

    num = parseFloat(num);

    if ((isNaN(num)) || (!IsInt(num)) || (num < 0))
    {
        console.log('INVALID INPUT!\n');
        return false;
    }
    else
    {
        num = parseInt(num);
        return (num);
    }
}

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
/* Main func that runs the program */
function MainFunc()
{
    'use strict';
    let input = require('readline-sync');
    let chalk = require('chalk');

    let arr_size = input.question('Please enter the array size: ');
    let res = IsPosInt(arr_size);
    if (res)
    {
        arr_size = parseInt(arr_size);
        let arr = new Array(arr_size);
        console.log('The length of the array is: ' + chalk.greenBright(arr.length));

        arr = RandomIntegers(arr, arr_size);

        console.log(chalk.yellow('The array values are:\n')); 
        console.log(arr);

        PrintMinMAx(arr, arr_size);
    }
    else
    {
        return;
    }


}; MainFunc();

