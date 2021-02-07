

function DescribeCountry(country, population, capital)
{
    let sentence = `\n${country} has ${population} million pepole and its capital city is ${capital}.\n`;

    return (sentence);
}


function MainFunction ()
{
    'use strict';
    let country_a = "Israel";
    let country_b = "Finland";
    let country_c = "China";

    let population_a = 8.884;
    let population_b = 6;
    let population_c = 1393;

    let capital_a = "Jerusalem";
    let capital_b = "Helsinki";
    let capital_c = "Beijing";

    let str_a = DescribeCountry(country_a, population_a, capital_a);
    let str_b = DescribeCountry(country_b, population_b, capital_b);
    let str_c = DescribeCountry(country_c, population_c, capital_c);

    console.log(str_a);
    console.log(str_b);
    console.log(str_c);

}; MainFunction();