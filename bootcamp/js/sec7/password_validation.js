/*****************************************************************************
* File Name: password_validation.js                                          *
* Section: 7                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/08/21 15:40                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
function PasswordValidation1(password)
{
    if (password.length >= 7)
    {
        console.log('STRONG!\n')
    }
    else 
    {
        console.log('WEAK!\n');
    }
}

/*---------------------------------------------------------------------------*/
/* This function check if there any capital letter in a string */
function CheckCapitalLetter(str)
{
    'use strict';

    let flag = 0;

    for (let i = 0; i < str.length; ++i)
    {
        if ((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 90))
        {
            flag = 1;
            return (flag);
        }
    }
    
    return (flag);

    // ( str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 )
    // ?
    //     flag = 1 
    // :
    //     flag = 0
        
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';

    let password = 'asas';
    PasswordValidation1(password);

    password = 'abaabababab';

    let PasswordValidation2 = (password) => { (password.length >= 7) ? console.log('STRONG!\n') : console.log('WEAK\n'); };
    PasswordValidation2(password);

    let StrongerPasswordValidation = (password) => {
        (password.length >= 7) 
        ? 
            ( (CheckCapitalLetter(password)) 
            ? 
                console.log('STRONGER') 
            : 
                console.log('STRONG') ) 
        : 
            console.log('WEAK')
    };

    password = 'AbcA';
    StrongerPasswordValidation(password);
    
    // (if (password.length >= 7) { for(i) { if (password[i].charCodeAt(i) { console.log('stronger')} else console.log('strong'))}} 
    // else console.log('weak'); 

    password = 'BAaaaaaaaa';
    StrongerPasswordValidation(password);

}; MainFunction();