let fs = require('fs');
let input = fs.readFileSync('max.txt').toString().split('\n');

input = input.toString().split(' ');
let maxIndex = 0;
let maxValue = 0;

for (let i = 0; i < input.length; i++ ) {
    let data = Number(input[i]);
    if (maxValue < data) {
        maxValue = data;
        maxIndex = i;
    }
}

console.log(maxValue);
console.log(maxIndex);