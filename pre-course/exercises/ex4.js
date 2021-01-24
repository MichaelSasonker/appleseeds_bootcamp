/* Ex4 */
/* Fixing #1 */

/* constant object that his values are arrays */
const RESTAURANT_OBJECT = {
    NOT_KOSHER_MEAT: ['NG', 'Fantastic', 'North Abraxass'],
    NOT_KOSHER_DAIRY: ['Cordero', 'Selas', 'Avocada'],
    NOT_KOSHER_ASIAN: ['Frame', 'Jasia', 'Taizu'],

    KOSHER_MEAT: ['2C', 'Meatos', 'Lentrecote'],
    KOSHER_DAIRY: ['Alma Lounge', 'Rendez Vous', 'Blue Sky'],
    KOSHER_ASIAN: ['Lumina', 'Nuchi', 'Japo'],

    LEMEHADRIN_MEAT: ['Meat & Bread', 'Salut', 'Lentrecote'],
    LEMEHADRIN_DAIRY: ['Fresh Kitchen', 'Little Napoli', 'Deka'],
    LEMEHADRIN_ASIAN: ['Oshi Oshi', 'Kanki', 'Dim Sum Shop']
};

/*-------------------------------------------------------------------*/
/* the function checks if the argument is an integer */
function IsInt(num) {
    if (0 === (num % 1))
    {
        return true;
    }
    else
    {
        return false;
    }
 }

/*-------------------------------------------------------------------*/
/*  this function ask the user for amount of pepole and return       */ 
/*  his selection                                                    */
function HowManyFunc()
{
    'use strict';
    let input = require('readline-sync');
    let pepole_num = input.question('How many pepole are you going to be?\n');

    if (pepole_num < 0)
    {
        pepole_num = undefined;
        console.log("invalid answer!!!");
        console.log("exiting, stop execution");
        return (pepole_num);
    }

    if (!IsInt(pepole_num))
    {
        console.log("invalid answer!!!");
        try
        {
            throw "stop execution";
        }
        catch(err)
        {
            console.log('exiting, ' + err);
        }
        
    }
    else
    {
        pepole_num = parseInt(pepole_num);
        return (pepole_num);
    }
}

/*-------------------------------------------------------------------*/
/*  this function ask the user for kosher option and return          */ 
/*  his selection                                                    */
function IsKosher()
{
    'use strict';
    let input_a = require('readline-sync');
    let is_kosher = input_a.question('Search for kosher restaurant?(y/n)\n');
    
    is_kosher = is_kosher.toLowerCase();

    if ((is_kosher === "n") || (is_kosher === "no"))
    {
        return (is_kosher);
    }

    else if ((is_kosher === "y") || (is_kosher === "yes"))
    {
        is_kosher = IsLemehadrin();
        if (is_kosher === undefined)
        {
            return (is_kosher);
        }
        else
        {
            is_kosher = is_kosher.toLowerCase();
        }
        
        if ((is_kosher === "n") || (is_kosher === "no"))
        {
            is_kosher = "kosher"
            return (is_kosher);
        }

        else if ((is_kosher === "y") || (is_kosher === "yes"))
        {
            is_kosher = "lemehadrin";
            return (is_kosher);
        }
        else
        {
            console.log("invalid answer!!!");
            try
            {
                throw "stop execution";
            }
            catch(err)
            {
                console.log('exiting, ' + err);
            }
        }

    }
    else
    {
        console.log("invalid answer!!!");
        try
        {
            throw "stop execution";
        }
        catch(err)
        {
            console.log('exiting, ' + err);
        }
    }
}

/*-------------------------------------------------------------------*/
/*  this function ask the user for lemehadrin option and return      */ 
/*  his selection                                                    */
function IsLemehadrin()
{
    'use strict';
    let input = require('readline-sync');
    let is_lemehadrin = input.question('search for Kashrut Lemehadrin?(y/n)\n');

    is_lemehadrin = is_lemehadrin.toLowerCase();
    if (is_lemehadrin === 'y' || is_lemehadrin === 'n' || is_lemehadrin === 'yes' || is_lemehadrin === 'no')
    {
        return (is_lemehadrin);    
    }
    else
    {
        console.log("invalid answer!!!");
        try
        {
            throw "stop execution";
        }
        catch(err)
        {
            console.log('exiting, ' + err);
        }
    }

}

/*-------------------------------------------------------------------*/
/*  this function prints the food type possibilities and return      */ 
/*  the selection of the user                                        */
function FoodType()
{
    'use strict';
    let food_type = ['Meat', 'Dairy', 'Asian'];
    let food_type_place;
    let food_type_res;

    let input = require('readline-sync');
    
    console.log('--------------------------------------------------\n');
    food_type_place = input.keyInSelect(food_type, "Please choose the type of food you want to eat:");
    food_type_res = food_type[food_type_place];
    return (food_type_res);
}

/*-------------------------------------------------------------------*/
/*  this function prints the restaurant possibilities and return     */ 
/*  the selection of the user                                        */
function RecomFunc(kosher_res, food_res)
{
    'use strict';
    let restaurant_place;
    let restaurant_res;

    let input = require('readline-sync');
    
    if (kosher_res === 'n')
    {
        if (food_res === 'Meat')
        {
            console.log('--------------------------------------------------\n');
            restaurant_place = input.keyInSelect(RESTAURANT_OBJECT['NOT_KOSHER_MEAT'],"Please choose a restaurant:");
            restaurant_res = RESTAURANT_OBJECT['NOT_KOSHER_MEAT'][restaurant_place];
            return (restaurant_res);
        }
        else if (food_res === 'Dairy')
        {
            console.log('--------------------------------------------------\n');
            restaurant_place = input.keyInSelect(RESTAURANT_OBJECT['NOT_KOSHER_DAIRY'],"Please choose a restaurant:");
            restaurant_res = RESTAURANT_OBJECT['NOT_KOSHER_DAIRY'][restaurant_place];
            return (restaurant_res);
        }
        else if (food_res === 'Asian')
        {
            console.log('--------------------------------------------------\n');
            restaurant_place = input.keyInSelect(RESTAURANT_OBJECT['NOT_KOSHER_ASIAN'],"Please choose a restaurant:");
            restaurant_res = RESTAURANT_OBJECT['NOT_KOSHER_ASIAN'][restaurant_place];
            return (restaurant_res);
        }
    }
    else if (kosher_res === 'kosher')
    {
        if (food_res === 'Meat')
        {
            console.log('--------------------------------------------------\n');
            restaurant_place = input.keyInSelect(RESTAURANT_OBJECT['KOSHER_MEAT'],"Please choose a restaurant:");
            restaurant_res = RESTAURANT_OBJECT['KOSHER_MEAT'][restaurant_place];
            return (restaurant_res);
        }
        else if (food_res === 'Dairy')
        {
            console.log('--------------------------------------------------\n');
            restaurant_place = input.keyInSelect(RESTAURANT_OBJECT['KOSHER_DAIRY'],"Please choose a restaurant:");
            restaurant_res = RESTAURANT_OBJECT['KOSHER_DAIRY'][restaurant_place];
            return (restaurant_res);
        }
        else if (food_res === 'Asian')
        {
            console.log('--------------------------------------------------\n');
            restaurant_place = input.keyInSelect(RESTAURANT_OBJECT['KOSHER_ASIAN'],"Please choose a restaurant:");
            restaurant_res = RESTAURANT_OBJECT['KOSHER_ASIAN'][restaurant_place];
            return (restaurant_res);
        }
    }
    else if (kosher_res === 'lemehadrin')
    {
        if (food_res === 'Meat')
        {
            console.log('--------------------------------------------------\n');
            restaurant_place = input.keyInSelect(RESTAURANT_OBJECT['LEMEHADRIN_MEAT'],"Please choose a restaurant:");
            restaurant_res = RESTAURANT_OBJECT['LEMEHADRIN_MEAT'][restaurant_place];
            return (restaurant_res);
        }
        else if (food_res === 'Dairy')
        {
            console.log('--------------------------------------------------\n');
            restaurant_place = input.keyInSelect(RESTAURANT_OBJECT['LEMEHADRIN_DAIRY'],"Please choose a restaurant:");
            restaurant_res = RESTAURANT_OBJECT['LEMEHADRIN_DAIRY'][restaurant_place];
            return (restaurant_res);
        }
        else if (food_res === 'Asian')
        {
            console.log('--------------------------------------------------\n');
            restaurant_place = input.keyInSelect(RESTAURANT_OBJECT['LEMEHADRIN_ASIAN'],"Please choose a restaurant:");
            restaurant_res = RESTAURANT_OBJECT['LEMEHADRIN_ASIAN'][restaurant_place];
            return (restaurant_res);
        }
    }
}

/*-------------------------------------------------------------------*/
/* main function for running the program */
(function()
{
    'use strict';

    let res_arr = [];

    console.log('Welcome for restaurant reservation app\n');

    let res_how_many = HowManyFunc();

    if (res_how_many === undefined)
    {
        return;
    }
    else 
    {
        res_arr.push(res_how_many);
    }


    let res_is_kosher = IsKosher();
    if (res_is_kosher === undefined)
    {
        return;
    }
    else
    {
        res_arr.push(res_is_kosher);
    }


    let res_food_type = FoodType();
    res_arr.push(res_food_type);


    let res_recom_func = RecomFunc(res_arr[1], res_arr[2]);

    res_arr.push(res_recom_func);

    if (res_food_type === undefined || res_recom_func === undefined)
    {
        console.log('\nCanceling order!\n')
        return;
    }
    else
    {
        console.log('\n');
        console.log('Reservation succseeded!\n');
        console.log('Table for ' + res_arr[0] + ' pepole in ' + res_arr[3] + ' restaurant is saved\n');
        console.log('Have Fun!\n');
    }

}) ();
