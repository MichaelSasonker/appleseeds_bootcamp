/*----------------------------------------------------------------------------
- File Name: dark_or_light_colors.js                                         -
- Section: 7                                                                 -
- Developer: Michael Sasonker                                                -
- Date: 02/08/21 23:00                                                       -
- Status: done                                                               -
-----------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------*/
/* This function return the kind of the color */
function ReturnColorKind(color)
{
    let switcher = color;
    //let result = '';
    switch (switcher)
    {
        case 'yellow':
        case 'pink':
        case 'orange':    
            return 'light color';

        case 'blue':
        case 'purple':
        case 'brown': 
            return 'dark color';
        
        default:
            return 'unkown color';
    }
}


/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';

    let color = window.prompt("Please enter a color: ");

    let result = ReturnColorKind(color);

    console.log(result);

}; MainFunction();
