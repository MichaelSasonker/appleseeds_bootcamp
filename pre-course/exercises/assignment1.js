/* Assignment1 - quiz */

const QUIZ_QUESTIONS_ARR = ["What word do you think describes you best?\n",
                            "What word might a friend use to describe you?\n",
                            "Do your friends trust you?\n",
                            "COVID-19 question:\tIf you are in a bus, and you see someone that isn't wearing a mask, what you'll do?\n",
                            "If a friend came to you with a personal problem, how would you handle it?",
                            "What is your favorite color?",
                            "What is most important to you in life?"];

const QUIZ_ANSWERS_OBJ =
{                 //  0        1        2       3        -1
    QST_NUM0_ANSW: ['Loyal.', 'Shy.', 'Brave.', 'Strong.'],  /* [0] */

    QST_NUM1_ANSW: ['Kind.', 'Protective.', 'Talkative.', 'Arrogant.'],              

    QST_NUM2_ANSW: ['Of course they are!', 'Most of them are.', 'Only my best friend.', 'Who cares?!'],              

    QST_NUM3_ANSW: ["I'll tell him to wear it!", "I have my mask on...",
                    "Nothing.", "I'll start to make fun on COVID-19 with him."],              

    QST_NUM4_ANSW: ["Listen to them, and help in any way I could.", "Try to reassure them, and try to change the subject.",
                    "Ignore them, I have my own problems.", "Go find who or what is causing the problem and destroy it!"],              

    QST_NUM5_ANSW: ["Blue.", "Red.", "Green.", "Black."],              

    QST_NUM6_ANSW: ["Family.", "Friends.", "Self-Fulfillment.", "Pleasures."]              
};

/*-------------------------------------------------------------------------------------*/
function DisplayQst()
{
    'use strict';
    let answ_arr =[]; 
    let j = 0;                          // QUIZ_QUESTIONS_ARR index 

    let input = require('readline-sync');
    const chalk = require('chalk');
 
    for (let i  in QUIZ_ANSWERS_OBJ)
    {
        console.log(chalk.redBright(`Question #${j + 1}`));
        answ_arr[j] = input.keyInSelect(QUIZ_ANSWERS_OBJ[`${i}`], chalk.redBright(QUIZ_QUESTIONS_ARR[j])); 
        answ_arr[j] = IsCancel(answ_arr[j]);
        console.log(chalk.greenBright('\n***************************************************************'));
        console.log(chalk.greenBright('***************************************************************\n'));
        if (answ_arr[j] === undefined)
        {
            return;
        }
        ++j;
    }
    return (answ_arr);
}

/*-------------------------------------------------------------------------------------*/
function IsCancel(answer)
{
    'use strict';

    if (answer == -1)
    {
        try
        {
            throw "\n\tCANCELING, BYE!!!\n";
        }
        catch(err)
        {
            console.log(err);
        }
    }
    else 
    {
        return (answer);
    }
}

/*-------------------------------------------------------------------------------------*/
function SumAns(res_arr, size_arr)
{
    'use strict';
    let sum = 0;

    while (size_arr != 0)
    {
        sum += res_arr[size_arr - 1];
        --size_arr;
    }

    return (sum);
}

/*-------------------------------------------------------------------------------------*/
function ResultFunc(res)
{
    'use strict';
    const chalk = require('chalk');

    if ((res >= 0) && (res <= 7))
    {
        console.log(chalk.magentaBright("You are an ANGEL!\n"));
        console.log(chalk.magentaBright("As an Angel, you hold everyone and everything close to your heart.\n" +
                                    "You care deeply about every family and friends.\n" +
                                    "You go out of your way to help the community in any way you can,\n" +
                                    "and often take your loyal, loving family along with you.\n"));
    }
    else if ((res >= 8) && (res <= 15))
    {
        console.log(chalk.whiteBright("You are a FALLEN ANGEL!\n"));
        console.log(chalk.whiteBright("As a Fallen Angel, you want to be good but in your way.\n" +
                                    "You care about someone else but you have your limits.\n" +
                                    "You are out of your way but you can still fix it!\n" +
                                    "You are still feeling loyal. We hope you find your way!\n"));
    }
    else
    {
        console.log(chalk.redBright("You are the DEVIL!\n"));
        console.log(chalk.redBright("As the DEVIL, You are the supreme sprit of evil.\n" +
                                    "You are more than willing to fight and not always for what you believe in.\n" +
                                    "You have a lot of pride in your beliefs.\n" +
                                    "You sometimes come off as rude or arrogant.\n" +
                                    "You are Hopeless!\n"));
    }
}   

/*-------------------------------------------------------------------------------------*/
/* main function */
function MainFunc()
{
    'use strict';

    let input = require('readline-sync');
    const chalk = require('chalk');
    let usr_name;
    let res_qst = [];
    let res_sum = 0;

    console.log(chalk.yellowBright('***************************************************************'));
    console.log(chalk.yellowBright('***************************************************************'));
    console.log(chalk.greenBright('Hello,\nWelcome to "Are you an angle" quiz.'));
    usr_name = input.question(chalk.greenBright('Please write your name:\n'));
    console.log(chalk.greenBright(`Ok ${usr_name}\n` + 'Let\'s begin.'));
    console.log(chalk.yellowBright('***************************************************************'));
    console.log(chalk.yellowBright('***************************************************************'));
    res_qst = DisplayQst();
    if (res_qst === undefined)
    {
        return;
    }

    res_sum = SumAns(res_qst, res_qst.length);

    ResultFunc(res_sum);

}; MainFunc();