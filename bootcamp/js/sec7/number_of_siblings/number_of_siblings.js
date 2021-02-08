/*****************************************************************************
* File Name: number_of_siblings.js                                           *
* Section: 7                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/08/21 09:45                                                       *
* Status: done                                                               *
******************************************************************************/


/*---------------------------------------------------------------------------*/
/* This function ask the user to enter the number of siblings, than it prints 
   a message respectivly to the conditions                                  */
function GetNumberOfSiblings()
{
    'use strict';

    let number_of_siblings = prompt('How many siblings do you have?');
    number_of_siblings = parseInt(number_of_siblings);

    if (number_of_siblings === 1)
    {
        console.log('1 sibling!!!');
    }

    else if (number_of_siblings > 1)
    {
        console.log('More than 1 sibling');
    }

    else
    {
        console.log('No siblings');
    }
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction() 
{
    'use strict';

    GetNumberOfSiblings();

}; MainFunction();



