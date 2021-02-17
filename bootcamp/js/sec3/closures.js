/*****************************************************************************
* File Name: clousers.js                                                     *
* Section: 3                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/17/21 15:15                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/

var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);      /* will equal to function */
var result = firstResult(2);            /* result is equal to 5 */

/*---------------------------------------------------------------------------*/

var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();                   /* will equal undefined */
console.log(a);         /* will print 1         */

/*---------------------------------------------------------------------------*/

let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 1000);
}

/*  will print 3 for 3 times! 
    The setTimeout(executeFunc, timeout), so the for loop will increment i till 3
    and than i will save as i = 3, than it will console log for 3 times i = 3 */