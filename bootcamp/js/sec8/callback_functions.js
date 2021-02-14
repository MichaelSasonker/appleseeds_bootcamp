/*****************************************************************************
* File Name: callback_functions.js                                           *
* Section: 8                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/14/21 13:30                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function verify that str is a string and send it to a callback func */
function IsString(str, CallbackFunc)
{
    if (typeof(str) === 'string')
    {
        CallbackFunc(str);
    }
}

/*---------------------------------------------------------------------------*/
/* This function prints the string */
const PrintStr = (str) => {
    console.log(str);
}

/*---------------------------------------------------------------------------*/
/* This function split the sentence to words and change the first word to 
   upper case and send it to a callback function.                            */
function FirstWordUpperCase(str, CallbackFunc)
{
    str = str.split(" ");
    str[0] = str[0].toUpperCase();
    
    str = CallbackFunc(str);
    console.log(str);
}

/*---------------------------------------------------------------------------*/
/* This function returns the string with dashes instead spaces */
const PrintWithDashes = (str) => (str.join("-")); 

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';
    IsString('aaa', PrintStr);
    FirstWordUpperCase('aba hha kk l', PrintWithDashes);

}; MainFunction();
