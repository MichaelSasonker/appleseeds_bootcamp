/*****************************************************************************
* File Name: func_decl_va_exp.j                                              *
* Section: 3                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/07/21 20:00                                                       *
* Status: done                                                               *
*****************************************************************************/

const WORLD_POPULATION = 7900;

/*---------------------------------------------------------------------------*/
/* Decleration function that return the percentage of country from the world */
function PercentageOfTheWorld1(population)
{
    'use strict';

    let percentage_of_world = (population / WORLD_POPULATION) * 100;

    return (percentage_of_world)
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction ()
{
    'use strict';

    let israel_population = 8.739;
    let usa_population = 332.188;
    let china_population = 1441;

    let isr_perc = PercentageOfTheWorld1(israel_population);
    console.log(`Israel population percentage of the world is: ${isr_perc}`)
    
    let usa_perc = PercentageOfTheWorld1(usa_population);
    console.log(`USA population percentage of the world is: ${usa_perc}`)

    let china_perc = PercentageOfTheWorld1(china_population);
    console.log(`China population percentage of the world is: ${china_perc}`)

    /* Expression function that return the percentage */
    let population_perc = function (population) {
        return ((population / WORLD_POPULATION) * 100);
    }; 

    console.log(population_perc(israel_population));
    console.log(population_perc(usa_population));
    console.log(population_perc(china_population));

    /* Arrow function that returns the percentage */
    let population_perc_arrow = (population) => ((population / WORLD_POPULATION) * 100);  
    console.log(population_perc_arrow(israel_population));

}; MainFunction();