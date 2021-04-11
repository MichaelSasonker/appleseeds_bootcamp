const fs = require('fs');

fs.writeFileSync('test.txt', 'Some text.');


fs.copyFileSync('./test.txt', './test_copy.txt');


fs.renameSync('./test_copy.txt', './test_copy_2.txt');

fs.readdirSync('./').forEach(file => console.log(file));


fs.appendFileSync('./test.txt', 'changing...');

const data = fs.readFileSync('./test.txt', {encoding: 'utf8', flag: 'r'});
console.log(data);