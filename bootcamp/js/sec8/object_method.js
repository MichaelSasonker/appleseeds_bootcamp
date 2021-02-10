/*****************************************************************************
* File Name: object_method.js                                                *
* Section: 8                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/10/21 15:30                                                       *
* Status: done                                                               *
******************************************************************************/





function MainFunction()
{
    'use strict';

    let my_country = {
        country: 'Israel',
        capital: 'Jerusalem',
        language: 'Hebrew',
        population: 9,
        neighbours: ['Egypte', 'Jordan', 'Syria'],
        DescibeObj: function() {
            return (this.country + ' has ' + this.population + ' million pepole, their mother tongue is '
              + this.language + ' they have ' + this.neighbours.length + ' neighbouring countries, ' 
              + this.neighbours + ' and a capital called ' + this.capital + '.');
        },
        CheckIsland: function() {
            this.is_island =  ((!this.neighbours.length) ? true : false);
            return (this.is_island);
        },
        
    };

    console.log(my_country.DescibeObj());
    console.log(my_country.CheckIsland());
    console.log(my_country.is_island);

}; MainFunction();