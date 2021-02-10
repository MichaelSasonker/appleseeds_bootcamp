/*****************************************************************************
* File Name: object_method.js                                                *
* Section: 8                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/10/21 15:30                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';

    let my_country = {
        country: 'Israel',
        capital: 'Jerusalem',
        language: 'Hebrew',
        population: 9,
        neighbours: ['Egypte', 'Jordan', 'Syria'],
        /* This function prints the different properties in my_country (this) object */
        DescibeObj: function() {
            return (this.country + ' has ' + this.population + ' million pepole, their mother tongue is '
              + this.language + ' they have ' + this.neighbours.length + ' neighbouring countries, ' 
              + this.neighbours + ' and a capital called ' + this.capital + '.');
        },
        /* This function checks if there is any neighbours in my_country object and create
           a new property in it call is_island */
        CheckIsland: function() {
            this.is_island =  ((!this.neighbours.length) ? true : false);
            return (this.is_island);
        },
        
    };

    console.log(my_country.DescibeObj());
    console.log(my_country.CheckIsland());
    console.log(my_country.is_island);

}; MainFunction();