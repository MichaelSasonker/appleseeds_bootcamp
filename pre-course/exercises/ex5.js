/* Ex5 */

const ONE_HUNDRED = 100;

function PrintOdd()
{
    'use strict';
    for (let i = 1; i < ONE_HUNDRED; ++i)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }
        
    }
}


function MainFunc()
{
    'use strict';

    PrintOdd();

}; MainFunc();