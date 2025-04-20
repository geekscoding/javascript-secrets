var fs = require('fs');
var input = fs.readFileSync('test.txt').toString().split('\n');

var numbers = input[0].split(' ');
var num1 = parseInt(numbers[0]);
var num2 = parseInt(numbers[1]);

var plus = num1 + num2;
var minus = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;

console.log(plus);
console.log(minus);
console.log(multiply);
console.log(divide);