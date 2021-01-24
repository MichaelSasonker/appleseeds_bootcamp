/* Ex15 */

/*-----------------------------------------------------------------------------*/
/* Function that gets two string arrays as parameters and               * 
*  returns an array that is the joining of those two arrays             */
function JoinTwoArr(arr1, arr2)
{
    'use strict';

    let arr3 = arr1.concat(arr2); 
    return (arr3);
}

/*-----------------------------------------------------------------------------*/
/* Main func that runs the program */
function MainFunc()
{
    'use strict';

    let input = require('readline-sync');

    let str1 = input.question('Please enter some string: \n');
    let str2 = input.question('Please enter some string: \n');

    //spliting to words
    str1 = str1.split(" "); 
    str2 = str2.split(" ");

    let arr_join_d = JoinTwoArr(str1, str2);
    console.log(arr_join_d);
    console.log(typeof(arr_join_d));

}; MainFunc();