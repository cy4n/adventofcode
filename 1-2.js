const fs = require("fs");

const filetext = fs.readFileSync('1-1.txt').toString('utf-8');
const textByLine = filetext.split('\n');

// const foo = textByLine.map((first) => {
// //     return first.match(/[a-z]*(?<i>\d).*(?<j>\d)[a-z]*$/)})
// const foo = textByLine.map((first) => {
//     return first.replace(/^[a-z]*(\d).*(\d)[a-z]*$/, `/$1$2/`)})
//
//
// console.log(foo)

const numbers = {
    'one': 'o1e',
    'two': 't2o',
    'three': 't3e',
    'four': 'f4r',
    'five': 'f5e',
    'six': 's6x',
    'seven': 's7n',
    'eight': 'e8t',
    'nine': 'n9e',
    'zero': 'z0o',
}

const out = textByLine.map((line) => {
    const foo = line.replace(/(one|two|three|four|five|six|seven|eight|nine|zero)/g, n => numbers[n])
    const bar = foo.replace(/(one|two|three|four|five|six|seven|eight|nine|zero)/g, n => numbers[n])
    const i = bar.replace(/^[a-z]*(\d).*/, '$1')
    const j = bar.replace(/.*(\d)[a-z]*$/, '$1')
    // console.log(i)


    const num = parseInt(i.concat(j))
    console.log({line:line, fooLine: foo, barLine: bar, "i": i, "j": j, "num": num })
    return num
}).reduce((a, b) => a + b, 0)

console.log(out)