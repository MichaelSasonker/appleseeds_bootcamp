import { readFileSync } from 'fs';
console.log(process.env);


readFileSync('../file_system_2.1/test.txt', (err, source) => {
    if (err) {
      console.error(err);
    } else {
      console.log(source);
    }
  });