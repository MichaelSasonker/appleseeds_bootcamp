
const PI = 3.14;

function CalculateCircleArea(radius) 
{
    let res = radius * radius * PI;
    return (res);
}

function MainFunction ()
{
    'use strict';

    let radius = parseFloat(5.1012304);
    let circle_area = CalculateCircleArea(radius);

    console.log(`The result is: ${circle_area}`);
    console.log(`The rounded result is: ${circle_area.toFixed(2)}`);


}; MainFunction();