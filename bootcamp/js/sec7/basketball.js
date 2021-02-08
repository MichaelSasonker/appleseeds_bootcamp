/*****************************************************************************
* File Name: Basketball.js                                                   *
* Section: 7                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/08/21 10:40                                                       *
* Status: done                                                               *
******************************************************************************/


/*---------------------------------------------------------------------------*/
/* This function gets 3 ints and returns the higher integer */ 
function BasketballGameWinner(avg1, avg2, avg3)
{
   let tie = -1;
   
   if ((avg1 > avg2) && (avg1 > avg3))
   {
       return (avg1);
   }

   else if ((avg2 > avg1) && (avg2 > avg3))
   {
       return (avg2);
   }

   else if ((avg3 > avg1) && (avg3 > avg2))
   {
       return (avg3);
   }   

   else 
   {
       return tie;
   }
}

/*---------------------------------------------------------------------------*/
/* This function gets array of ints and return the avvarege of the array */
function AverageScore(score_arr)
{
    let avg = 0;
    let sum = 0;

    for (let i = 0; i < score_arr.length; ++i)
    {
        sum += score_arr[i];
    }

    avg = sum / (score_arr.length);

    return (avg);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction() 
{
    'use strict';

    let jhon_score = [89, 89, 103];
    let mike_score = [89, 89, 103];
    let mary_score = [89, 89, 103];

    let jhon_avg = AverageScore(jhon_score);
    let mike_avg = AverageScore(mike_score);
    let mary_avg = AverageScore(mary_score);

    let result = BasketballGameWinner(jhon_avg, mike_avg, mary_avg);

    if (result === jhon_avg)
    {
        console.log('\nJhon wins!!!\n');
    }

    else if (result === mike_avg)
    {
        console.log('\nMike wins!!!\n');
    }

    else if (result === mary_avg)
    {
        console.log('\nMary wins!!!\n');
    }

    else 
    {
        console.log("\nIt's a T I E ! ! !\n");
    }

}; MainFunction();