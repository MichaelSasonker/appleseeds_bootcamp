/*****************************************************************************
* File Name: web_page.js                                                     *
* Section: 4                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/23/21 08:30                                                       *
* Status: done                                                               *
******************************************************************************/

const imgSrc = `https://picsum.photos/500`; 

const myHTML = `
    <div class='main-cont'>
        <h1> My Web-Page </h1>
        <img src='${imgSrc}' alt='some img'/>
        <p>
            Hi there!
            This web page is written only by JS!
        </p>

    </div>
`;

let bodyDoc = document.body;

bodyDoc.innerHTML = myHTML;
console.log(bodyDoc.innerHTML);

let mainCont = document.querySelector('.main-cont');
let img = document.querySelector('img');
console.log(img);

bodyDoc.style.background = '#f3f3f3';
mainCont.style.textAlign = 'center';
mainCont.style.padding = '20px';
mainCont.style.marginTop = '80px';
mainCont.style.fontFamily = 'Arial, Helvetica, sans-serif';
mainCont.style.color = '#333333';
mainCont.style.fontSize = '40px';

img.style.borderRadius = '50%';
