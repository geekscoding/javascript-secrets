let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split('\n');
console.log(input);

let line = input[0].split(' ');
console.log(line);

let a = parseInt(line[0]);
let b = parseInt(line[1]);

console.log(a + b);