/*****************************************************************************
* File Name: guess_the_letter.js                                             *
* Section: 5                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/24/21 10:20                                                       *
* Status: done                                                               *
******************************************************************************/

let body = document.body;
let input = document.querySelector('.input');
let header2 = document.querySelector('.h2');
let newDiv1 = document.createElement('div');
let newDiv2 = document.createElement('div');
let newBtn = document.createElement('button');

function Round() {

    let lettersArr = [];
    input.value = '?';
    newDiv1.textContent = '';
    newDiv2.textContent = '';
    newBtn.style.display = 'none';

    function GenerateRandomLetter() {
        let randNumber = Math.floor(Math.random() * 25) + 97; 
        let randLetter = String.fromCharCode(randNumber);
        return (randLetter);
    }
    
    let randomLetter = GenerateRandomLetter();
    
    
    body.addEventListener('keydown', function PrintGuesses(event) {
        
        if (event.key.charCodeAt() < 97 || event.key.charCodeAt() > 122)
        {
            newDiv1.textContent = 'Invalid input!';
            newDiv1.style.marginTop = '30px';
            newDiv1.style.color = 'blue';
            header2.insertAdjacentElement('afterend', newDiv1);
        }
        else 
        {
            if (event.key != randomLetter)
            {
                if (lettersArr.includes(event.key))
                {
                    newDiv1.textContent = `Already pressed!`;
                    newDiv1.style.marginTop = '30px';
                    newDiv1.style.color = 'red';
                    header2.insertAdjacentElement('afterend', newDiv1);
                }
                else 
                {
                    lettersArr.push(event.key);
                    newDiv1.textContent = `${lettersArr}`;
                    newDiv1.style.marginTop = '30px';
                    newDiv1.style.color = 'black';
                    header2.insertAdjacentElement('afterend', newDiv1);
    
                    newDiv2.textContent = 'Wrong letter';
                    newDiv2.style.marginTop = '10px';
                    newDiv2.style.marginBottom = '20px';
                    newDiv2.style.color = 'black';
                    header2.insertAdjacentElement('beforebegin', newDiv2);
                }
            }
            else 
            {
                input.value = randomLetter;
    
                newDiv2.textContent = 'You are right!';
                newDiv2.style.marginTop = '10px';
                newDiv2.style.marginBottom = '20px';
                newDiv2.style.color = 'green';
                header2.insertAdjacentElement('beforebegin', newDiv2);
    
                newBtn.textContent = 'Again';
                newBtn.style.fontSize = '24px';
                newBtn.style.marginTop = '20px';
                newBtn.style.height = '50px';
                newBtn.style.width = '100px';
                newBtn.style.background = '#030303';
                newBtn.style.color = '#f3f3f3';
                newBtn.style.display = 'block';
                header2.insertAdjacentElement('afterend', newBtn);
    
                body.removeEventListener('keydown', PrintGuesses);
                newBtn.addEventListener('click', Round);

            }
        }
    });

}; Round();
