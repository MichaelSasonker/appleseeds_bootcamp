/*****************************************************************************
* File Name: scope_and_hoisting.js                                           *
* Section: 3                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/17/21 13:00                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/

function funcA() {
    console.log(a);         /* prints undefined         */
    console.log(foo());     /* prints 2, hoisting!      */
    var a = 1;
    function foo() {
        return 2;
    }
} funcA();

/*---------------------------------------------------------------------------*/

var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
/*  prints the 'Aurelio De Rosa', this. will take the fullname from his own property */
                    console.log(obj.prop.getFullName());    

/*  prints undefined, test isn't a function */
var test = obj.prop.getFullName;
console.log(test());

/*---------------------------------------------------------------------------*/

function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a); /* prints error */
console.log(typeof b); /* prints error */

/*---------------------------------------------------------------------------*/

function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();
/* because of hoistings, it will prints the last declartion of funcC */
/*---------------------------------------------------------------------------*/

function funcD1() {
    d = 1;              /* global variable! */
}
funcD1();
console.log(d);         /* prints 1 */
function funcD2() {
    var e = 1;
}
funcD2();
console.log(e);         /* prints error, e is a scoped variable */

/*---------------------------------------------------------------------------*/

function funcE() {
    console.log("Value of f in local scope: ", f);  /* prints 1, it first defined f and than execute funcE */
}
console.log("Value of f in global scope: ", f);     /* prints undefined */
var f = 1;
funcE();