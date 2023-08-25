const { readFileSync, writeFileSync } = require('fs');
// blocking code
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);
const text = `Here is the result:\n${first}\n${second}`;

// if the file not exists node will create the file
// and if file exists it will override it's content
// in third argument which is the object {} flag setted to 'a' will append text to existed one
writeFileSync('./content/result-sync.txt', text, {flag: 'a'});

console.log('done with the task')
console.log('starting the next one');
// const result = readFileSync('./content/result-sync.txt', 'utf8');
// console.log(result);
