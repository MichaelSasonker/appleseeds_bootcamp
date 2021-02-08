/*****************************************************************************
* File Name: country_to_live.js                                              *
* Section: 7                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/08/21 14:50                                                       *
* Status: done                                                               *
******************************************************************************/

/*****************************************************************************/
/* This function check if the inputs is ideal for country to live in */
function CountryToLiveIn(island, population, language, country)
{
    'use strict';

    if (island && population <= 50 && language === 'english')
    {
        console.log(`You should live in ${country}\n`);
    }

    else 
    {
        console.log(`${country} does NOT meet your criteria\n`);
    }
}

/*****************************************************************************/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';

    let country = 'usa';
    let island = false;
    let population = 50;
    let language = 'english'

    CountryToLiveIn(island, population, language, country);

}; MainFunction();