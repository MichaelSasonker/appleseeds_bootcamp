/* Assignment3 */

/*-----------------------------------------------------------------------------*/
const WORDS = ['fullstack', 'developer', 'java', 'mongodb', 'html', 'jquary', 'css', 'bootcamp'];
const ATTEMPS_NUMBER = 10;

/*-----------------------------------------------------------------------------*/
/* This function print welcome mesage using Figlet library  */
function PrintWelcome()
{
    'use strict';

    let figlet = require('figlet');
    let chalk = require('chalk');

    console.log(chalk.whiteBright.bold("-----------------------------------------------------"));
    console.log(chalk.whiteBright.bold("-----------------------------------------------------"));
    console.log(chalk.greenBright.bold(figlet.textSync('HANGMAN', {
        font: 'Big',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
    })));
    console.log(chalk.whiteBright.bold("-----------------------------------------------------"));
    console.log(chalk.whiteBright.bold("-----------------------------------------------------\n"));
    console.log(chalk.whiteBright('In this game you need to guess some word from web' + '\n'
                + 'development world.\nGood Luck!\n'));   
}    

/*-----------------------------------------------------------------------------*/
/* This function generate random number between 0 and WORDS length */
function GenerateRandomPlace()
{
    'use strict';

    let rand_integer = Math.floor((Math.random() * WORDS.length));
    return (rand_integer);
}

/*-----------------------------------------------------------------------------*/
/* This function display the word as asterisks */
function DisplayWordAsAsterisks(word)
{
    'use strict';

    let word_as_asterisk = word.replace(/./g, '*');
    return (word_as_asterisk);
}

/*-----------------------------------------------------------------------------*/
/* This function find the indexes of the letter that the user insert 
*  and return the result array                                      */
function FindIndexes(word, letter, dest_arr)
{
    'use strict';

    for (let i = 0; i < word.length; ++i)
    {    
        if (word[i] == letter)
        {
            dest_arr.push(i);
        } 
    }
    return dest_arr;
}

/*-----------------------------------------------------------------------------*/
/* This function replaces the asterisks with the letter that the user insert */
function ReplaceAsterisksWithLetter(word, letter_position, letter)
{
    'use strict';

    word = word.split("");
    
    for (let i = 0; i < letter_position.length; ++i)
    {
        word.splice(letter_position[i], 1, letter);
    }
    word = word.join("");
    
    return (word);
}

/*-----------------------------------------------------------------------------*/
/* This function checks if the letter is valid letter */
function IsValidLetter(letter)
{
    'use strict';

    if ((letter >= 'a') && (letter <= 'z'))
    {
        return (true);
        
    }
    else
    {
        return (false);
    }
}

/*-----------------------------------------------------------------------------*/
/* One round function, this function ask the user to write a letter and print  *
*  the asterisks word respectivly. It'll print the result of the round.        */
function OneRound(word_as_asterisk, rand_word)
{
    'use strict';

    let input = require('readline-sync');
    let chalk = require('chalk');

    let letter;
    let counter = 0;

    while ((word_as_asterisk != rand_word) && (counter != ATTEMPS_NUMBER)) 
    {
        let letter_position = [];

        letter = input.question(chalk.whiteBright("\nPlease enter a letter: "));
        console.log(chalk.whiteBright.bold("-----------------------------------------------------"));
        console.log(chalk.whiteBright.bold("-----------------------------------------------------"));

        letter = letter.toLowerCase();
        
        if ((IsValidLetter(letter) == false) || (letter[1]))
        {
            console.log(chalk.redBright('\nINVALID INPUT!!!'));
            console.log(chalk.redBright('Please try again.\n'))
            continue;
        }
        else
        { 
            letter_position = FindIndexes(rand_word, letter, letter_position);

            word_as_asterisk = ReplaceAsterisksWithLetter(word_as_asterisk, letter_position, letter);

            console.log(chalk.blueBright('Now the word is: \n'));
            console.log(chalk.greenBright.bold(word_as_asterisk));

            if ((ATTEMPS_NUMBER - counter - 1 == 0) && (word_as_asterisk != rand_word))
            {
                console.log(chalk.cyanBright('\nNO more attemps left!\nYOU LOOSE!!!\n'));
            }
            else
            {
                console.log('\n' + chalk.whiteBright('You have ') +
                 chalk.greenBright(ATTEMPS_NUMBER - counter - 1) + 
                 chalk.whiteBright(' attemps left.'));
            }
            ++counter;
        }

    }
    if (word_as_asterisk == rand_word)
    {
        console.log(chalk.yellowBright('\nYou FIND the word!!!\nYou WIN!!!'));
    }
    else
    {
        return;
    }
}

/*-----------------------------------------------------------------------------*/
/* Main func that runs the program */
function MainFunc()
{
    'use strict';
    let chalk = require('chalk');  

    PrintWelcome();

    let rand_word = WORDS[GenerateRandomPlace()];

    let word_as_asterisk = DisplayWordAsAsterisks(rand_word);

    console.log(chalk.whiteBright.bold("-----------------------------------------------------"));
    console.log(chalk.whiteBright.bold("-----------------------------------------------------"));
    console.log(chalk.whiteBright('You have ') + chalk.greenBright(ATTEMPS_NUMBER) + chalk.whiteBright(' attemps left.'));
    console.log('\n' + chalk.greenBright.bold(word_as_asterisk));

    OneRound(word_as_asterisk, rand_word);

}; MainFunc();


