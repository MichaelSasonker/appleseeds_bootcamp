/*****************************************************************************
* File Name: Font_size.js                                                    *
* Section: 4                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/22/21 13:30                                                       *
* Status: done                                                               *
******************************************************************************/

/* Select the differents elements */
let text = document.querySelector('.text');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');

/* When clicking plus increase the font size by 5 px */
plus.addEventListener('click', () => {
    /* change it from string to number */
    let fontSize = parseInt(window.getComputedStyle(text).fontSize);
    fontSize += 5;
    if (fontSize < 100)
    {
        text.style.fontSize = `${fontSize}px`;
    }   
});

/* When clicking minus decrease the font size by 5 px */
minus.addEventListener('click', () => {
    let fontSize = parseInt(window.getComputedStyle(text).fontSize);
    fontSize -= 5;
    if (fontSize > 6)
    {
        text.style.fontSize = `${fontSize}px`;
    }   
});