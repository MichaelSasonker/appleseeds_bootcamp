const summation = (a, b) =>  a + b;
const subtraction = (a, b) =>  a - b;
const multiply = (a, b) => a * b;
const division = (a, b) =>  a / b;
const power = (a, b) => {
    let result = 1;
    for (let i = 0; i < b; ++i) {
        result *= a;
    }
    return result;
}
 
module.exports = {
  summation,
  subtraction,
  multiply,
  division,
  power,
}


