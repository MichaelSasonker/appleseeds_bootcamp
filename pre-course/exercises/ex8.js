/* Ex8 */

const ONE_HUNDRED_AND_ONE = 101;

/* function that prints 7 boom game between 0 to 100 */
function SevenBoom()
{
    'use strict';

    let chalk = require('chalk');

    let i = 0;

    console.log(chalk.whiteBright(i));

    for (i = 1; i < ONE_HUNDRED_AND_ONE; ++i)
    {
        if ((i % 7 === 0) || (i % 10 === 7) || (parseInt(i / 10) === 7))
        {
            console.log(chalk.redBright('BOOM'));
        }
        else
        {
            console.log(chalk.whiteBright(i));
        }
    }
}

function MainFunc()
{
    'use strict';

    SevenBoom();

}; MainFunc();