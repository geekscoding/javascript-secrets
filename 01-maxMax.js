let fs = require('fs');
let input = fs.readFileSync('maxMax.txt').toString().split('\n');

let data = input.map(x => Number(x));
console.log(data);
let max = Math.max(...data);

console.log(max);
console.log(data.indexOf(max) + 1);