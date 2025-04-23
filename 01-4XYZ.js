let input = "4 XYZ";
let [r, s] = input.split(" ");
console.log([r, s]);
let textCase = Number(r);
console.log(textCase);
let result = "";

for (let i = 0; i < s.length; i++) {
    result += s[i].repeat(r);
}

console.log(result);

let inputs = [
    "3 ABC",
    "5 /HTP",
    "2 GO"
];

for (let i of inputs) {
    let [r, s] = i.split(" ");
    r = Number(r);

    let res = "";
    for (let c of s) {
        res += c.repeat(r);
    } 
    console.log(res);
}