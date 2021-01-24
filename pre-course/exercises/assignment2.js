/* Assingment2 */


/*-----------------------------------------------------------------------------*/
/* constants definitions  */
const ZERO = 0;
const FIFTY = 50;
const ANSWER = ['Continue to the next round.'];

/*-----------------------------------------------------------------------------*/
/* This function creating sleep command */
function sleep(milliseconds) 
{
    'use strict';
    const date = Date.now();
    let currentDate = null;

    do 
    {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

/*-----------------------------------------------------------------------------*/
/* This function displays welcome message */
function PrintWelcomeMessage()
{
    'use strict';

    let input = require('readline-sync');
    let chalk = require('chalk');

    console.log('**********************************************\n*'
                + chalk.greenBright('    Welcome to Game Of War - Card Game    ') 
                + '  *\n'
                + '**********************************************\n');
    
    let usr_name = input.question(chalk.greenBright('Please enter your name: '));

    console.log(chalk.greenBright('Hello ' + usr_name + ", let's play!"));
    console.log('**********************************************');
    sleep(1000);
}

/*-----------------------------------------------------------------------------*/
/* function that checks if a number is positive integer */
function IsPosInt(num)
{
    'use strict';

    let chalk = require('chalk');

    num = parseFloat(num);

    if ((isNaN(num)) || (!IsInt(num)) || (num < 0))
    {
        console.log(chalk.redBright.bold('INVALID INPUT!\n'));
        return (false);
    }
    else
    {
        num = parseInt(num);
        return (num);
    }
}

/*-----------------------------------------------------------------------------*/
/* function that checks if a number is integer */
function IsInt(num)
 {
     'use strict';

    if (num % 1 === 0)
    {
        return (true);
    }
    else
    {
        return (false);
    }
 }

/*----------------------------------------------------------------------------*/
/* This function checks if the user input is valid */
function IsValidBetFunc(usr_bet, usr_sum, round_flag)
{
    'use strict';
    let chalk = require('chalk');
 
    if ((IsPosInt(usr_bet)) && (round_flag != -1))
    {
        if ((usr_bet > ZERO) && (usr_bet <= usr_sum))
        {
            usr_bet = parseInt(usr_bet);  
            RandFunc(usr_bet, usr_sum, round_flag);
        }
        else
        {
            console.log(chalk.redBright.bold('The bet is NOT between 0 and ') + chalk.redBright.bold(usr_sum + '!'));
            console.log(chalk.redBright.bold('Invalid input!\n'));
            sleep(1000);
            round_flag = -1;
            return (round_flag);
        }    
    }
    else    
    {
        round_flag = -1;
        return (round_flag);
    }
}

/*-----------------------------------------------------------------------------*/
/* This function generate random numbers and display to the user his results 
*  and the different choices he has.                                            */
function RandFunc(usr_bet, usr_sum, round_flag)
{
    'use strict';

    let input = require('readline-sync');
    let chalk = require('chalk');
   
    while (round_flag == 0)
    {
        console.log('**********************************************');
        console.log(chalk.greenBright("Let's mix the cards!"));

        let cpu_card = Math.floor((Math.random() * 12) + 1);
        let usr_card = Math.floor((Math.random() * 12) + 1);

        sleep(1200);

        console.log(chalk.greenBright('My card is: ') + chalk.white.bold(cpu_card));
        console.log(chalk.greenBright('Your card is: ') + chalk.white.bold(usr_card));

        if (cpu_card > usr_card) // computer won
        {
            sleep(1000);
            console.log('**********************************************');
            console.log(chalk.greenBright.bold('I win this round!'));

            usr_sum -= usr_bet;    

            console.log(chalk.greenBright(`Now you have ${usr_sum}ILS`));
            console.log('**********************************************');

            if (usr_sum == 0)
            {
                console.log('**********************************************');
                console.log(chalk.redBright.bold('You lose all of your money!\nSee you next time!'));
                sleep(1000);

                round_flag = -1;
                break;  
            }
            else
            {
                sleep(1000);
                console.log('**********************************************');

                round_flag = input.keyInSelect(ANSWER, 'What do you want to do?');

                if (round_flag == -1)
                {
                    console.log(chalk.blueBright('\nExiting the game!\nYou exit with: ') + chalk.white(usr_sum) + 'ILS\n');
                    console.log('**********************************************');
                    sleep(1000);

                    round_flag = -1;
                    break;
                }
                else
                {
                    console.log(chalk.green('\nLets continue!\nSo far you have: ') + chalk.white(usr_sum) + 'ILS\n');

                    sleep(1000);
                    console.log('**********************************************');

                    round_flag = 0;
                    usr_bet = input.question(chalk.greenBright('Please enter your bet for this round: '));

                    round_flag = IsValidBetFunc(usr_bet, usr_sum, round_flag);
                }
            }
        }
        else if (cpu_card < usr_card) // user won
        {
            sleep(1000);
            console.log('**********************************************');

            console.log(chalk.greenBright.bold('You win this round!'));
            usr_sum = usr_sum + usr_bet;  
            console.log(chalk.greenBright(`Now you have ${usr_sum}ILS`));

            console.log('**********************************************');
            round_flag = input.keyInSelect(ANSWER, 'What do you want to do?');

            if (round_flag == -1)
            {
                console.log(chalk.blueBright('\nExiting the game!\nYou exit with: ') + chalk.white(usr_sum) + 'ILS\n');

                console.log('**********************************************');
                sleep(1000);

                round_flag = -1;
                break;
            }
            else
            {
                console.log(chalk.green('\nLets continue!\nSo far you have: ') + chalk.white(usr_sum) + 'ILS\n');

                sleep(1000);
                console.log('**********************************************');

                round_flag = 0;
                usr_bet = input.question(chalk.greenBright('Please enter your bet for this round: '));

                round_flag = IsValidBetFunc(usr_bet, usr_sum, round_flag);
            }
        }
        else //DRAW
        {
            console.log(chalk.blueBright.bold('DRAW!!'));
            console.log(chalk.greenBright('next round on me!'));
            sleep(1500);

            round_flag = 0;
        }        
    }  
}

/*-----------------------------------------------------------------------------*/
/* main function that runs the program */
function MainFunc()
{
    'use strict';

    let input = require('readline-sync');
    let chalk = require('chalk');

    PrintWelcomeMessage();

    let usr_sum = FIFTY;
    let round_flag = 0;

    let usr_bet = input.question(chalk.greenBright(`You have ${usr_sum}ILS, please enter your bet for this round:\n`));

    IsValidBetFunc(usr_bet, usr_sum, round_flag);
    
}; MainFunc();