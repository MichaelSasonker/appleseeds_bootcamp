const yargs = require("yargs");
const calculator = require("./calculator.js");
 
const action = process.argv[2];
const a = yargs.argv.a;
const b = yargs.argv.b;
 
let result = "";

switch (action) {
    case 'add':
        result = calculator.summation(a , b);
        break;
    case 'sub':
        result = calculator.subtraction(a , b);
        break;
    case 'mult':
        result = calculator.multiply(a , b);
        break;
    case 'pow':
        result = calculator.power(a , b);
        break;
}
 
console.log(`${action} of  ${a} , ${b}: ${result}`)