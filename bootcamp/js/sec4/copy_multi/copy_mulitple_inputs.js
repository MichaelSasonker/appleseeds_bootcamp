/*****************************************************************************
* File Name: copy_multiple_inputs.js                                         *
* Section: 4                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/23/21 12:00                                                       *
* Status: done                                                               *
******************************************************************************/

const form = document.querySelector('[name="verify"]');
const inputs = form.querySelectorAll('.inputs input');

function handleInput(e) {
    // check for data that was inputtted and if there is a next input, focus it
    const input = e.target;
    if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
    }
}

function handlePaste(e) {
    const paste = e.clipboardData.getData('text');
    // loop over each input, and populate with the index of that string
    inputs.forEach((input, i) => {
        console.log(input);
        input.value = paste[i] || '';
    });
}

inputs[0].addEventListener('paste', handlePaste);

form.addEventListener('input', handleInput);