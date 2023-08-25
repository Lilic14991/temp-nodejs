// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project 
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)
// check npm version - npm --version | npm --v

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip) 
// npm hep init - for definitive documentation on these fields and exactly what they do. 
// npm init -y (everything default) faster way

// common convension is to use _ 
// lodash is utility library
const _ = require('lodash');
const numbers = [1, 2, 3, 4, 5, 6]

const items = [1 , [2, [3, [4]]]];
// flattenDeep - flats array to one dimension
const newItems = _.flattenDeep(items);
console.log(newItems);

const doubleNumbers = (n) => n * 2;

const dn = _.map(numbers, doubleNumbers);
const evenNumbers = _.filter(numbers, n => n % 2 == 0)
console.log(evenNumbers);

// .gitignore - file which modules will be ignored by source control