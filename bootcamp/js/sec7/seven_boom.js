/*****************************************************************************
* File Name: seven_boom.js                                                   *
* Section: 7                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/08/21 11:20                                                       *
* Status: done                                                               *
******************************************************************************/


/*****************************************************************************/
/* This function prints the numbers 1 till num and check if it divide by 7
   or has the digit 7.                                                     */
function SevenBoom(num) 
{
    'use strict';

    for (let i = 1; i <= num; ++i)
    {
        if (i % 7 === 0)
        {
            if ((i / 1 === 7) || (i / 10 === 7) || (i / 100 === 7) || (i / 1000 === 7))
            {
                console.log(' BOOM!-BOOM! ');
            }

            else
            {
                console.log(' BOOM! ');
            }
        }

        else
        {
            console.log(` ${i} `);
        }
    }
}

/*****************************************************************************/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';

    let num = 120;

    SevenBoom(num);

}; MainFunction();