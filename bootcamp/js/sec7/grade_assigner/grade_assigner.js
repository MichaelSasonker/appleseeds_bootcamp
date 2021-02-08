/*****************************************************************************
* File Name: Grade_assigner.js                                               *
* Section: 7                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/08/21 10:15                                                       *
* Status: done                                                               *
******************************************************************************/


/*---------------------------------------------------------------------------*/
/* This function gets from the user a grade and prints to the console a message */
function GetGradeAssigner() 
{
    'use strict';

    let grade = window.prompt('Please enter your grade');
    grade = parseInt(grade);

    if ((grade >= 0) & (grade <= 64))
    {
        console.log("F");
    }

    else if ((grade >= 65) & (grade <= 69))
    {
        console.log("D");
    }

    else if ((grade >= 70) & (grade <= 79))
    {
        console.log("C");
    }

    else if ((grade >= 80) & (grade <= 89))
    {
        console.log("B");
    }

    else if ((grade >= 90) & (grade <= 100))
    {
        console.log("A");
    }

    else 
    {
        console.log('Invalid input!!!');
    }
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction() 
{
    'use strict';

    GetGradeAssigner();

}; MainFunction();
   
   
   
   