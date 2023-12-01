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


const out = textByLine.map((line) => {
    const i = line.replace(/^[a-z]*(\d).*/, '$1')
    const j = line.replace(/.*(\d)[a-z]*$/, '$1')

    const num = parseInt(i.concat(j))
    return num
}).reduce((a,b) => a+b, 0)

console.log(out)