/*****************************************************************************
* File Name: copy_multiple_inputs.js                                         *
* Section: 4                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/23/21 12:00                                                       *
* Status: done                                                               *
******************************************************************************/


let inputs = document.querySelectorAll('input');
let newDiv = document.createElement('div');
let body = document.body;
let msg = document.createElement('h2');
let btn = document.querySelector('.btn');

body.insertAdjacentElement('afterend', newDiv);

btn.addEventListener('click', (bool) => {
    msg.textContent = '';
    // bool = true;
    if (bool) 
    {
        msg.textContent = 'Great!';
        msg.style.fontSize = '40px';
        msg.style.textAlign = 'center';
        msg.style.color = 'green';
        newDiv.insertAdjacentElement('afterend', msg);
    }

    else 
    {
        msg.textContent = 'Fasle!';
        msg.style.fontSize = '40px';
        msg.style.textAlign = 'center';
        msg.style.color = 'red';
        newDiv.insertAdjacentElement('afterend', msg);
    }
});

inputs[0].value = '5';


function RestrictToOne() {
    for (let i = 0; i < inputs.length; ++i)
    {
        let val = parseInt(inputs[i].value.length);
        if (val.length < 1)//|| val == 'NaN')
        {
            console.log('ERORR');
        }
        else 
        {
            console.log('AWSOME!!!')
        }

    }
}

