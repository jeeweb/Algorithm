const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const h = Number(input[0]);
    let result = "";
    for (let i = 1; i <= h; i++) {
        for (let j = 0; j < i; j++){
            result += "*"
        }
        result += "\n"
    }
    console.log(result)
});