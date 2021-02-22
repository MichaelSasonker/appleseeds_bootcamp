/*****************************************************************************
* File Name: text_area.js                                                    *
* Section: 4                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/22/21 16:30                                                       *
* Status: done                                                               *
******************************************************************************/

let text = document.querySelector('#text');
let btn = document.querySelector('#btn');
let counter = document.querySelector('.counter');

function TextSize() {
    let textAreaVal = text.value;

    if (textAreaVal.length < 100)
    {
        text.value = textAreaVal;
        btn.setAttribute('disabled', 'disabled');
    }
    else 
    {
        btn.removeAttribute('disabled');
    }

    counter.innerHTML = `${textAreaVal.length}/100`;

}

