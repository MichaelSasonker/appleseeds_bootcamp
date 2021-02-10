/*****************************************************************************
* File Name: candy_store.js                                                  *
* Section: 8                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/10/21 22:30                                                       *
* Status: done                                                               *
******************************************************************************/
/*---------------------------------------------------------------------------*/
let CANDYSTORE = {
    candies: [ {
        name:"mint gum",
        id:"as12f",
        price:2,
        amount:2
    },
    {
        name:"twix",
        id:"5hd7y",
        price:5,
        amount:4
    },
    ],
    cashRegister:200,
}

/*---------------------------------------------------------------------------*/
/* This function return the candy property that in the object */
function GetCandy(obj, id)
{
    if (obj.candies[0].id === id)
    {
        return (obj.candies[0]);
    }
    else
    {
        return (obj.candies[1]);
    }
}

/*---------------------------------------------------------------------------*/
/* This function return the price of the candy that in the obect */
function GetPrice(obj, id)
{
    if (obj.candies[0].id === id)
    {
        return (obj.candies[0].price);
    }
    else
    {
        return (obj.candies[1].price);
    }
}

/*---------------------------------------------------------------------------*/
/* This function add a new candy to the candies property */
function AddCandy(obj, name, id, price)
{
    obj.candies.push({name: name, id: id, price: price, amount: 1 });
}

/*---------------------------------------------------------------------------*/
/* This function add to the cashRegister property the price of the candy 
   that someone bought, and reduce the amount of this candy */
function BuyCandy(obj, id)
{   
    for (let i = 0; i < obj.candies.length; ++i)
    {
        if (obj.candies[i].id === id)
        {
            obj.cashRegister += obj.candies[i].price;
            obj.candies[i].amount -= 1; 
        }
    }
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */
function MainFunction()
{
    'use strict';

    console.log(GetCandy(CANDYSTORE, "5hd7y"));

    console.log(GetPrice(CANDYSTORE, "as12f"));

    AddCandy(CANDYSTORE, 'oreo', 'i78uj', 3);
    console.log(CANDYSTORE.candies);

    BuyCandy(CANDYSTORE, '5hd7y');
    console.log(CANDYSTORE.candies + ' ' + CANDYSTORE.cashRegister);




}; MainFunction();