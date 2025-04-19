const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function(line) {
    input.push(line);
}).on('close', function() { // 한줄 한줄 입력을 받아서 입력은 다 맞으면 close하고 process exit
    console.log(input);
    process.exit();
})