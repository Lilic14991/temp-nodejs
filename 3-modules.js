// ComminJS, every file is module  (by default)
// Modules - Encapsulated Code (only share minimum)

const {john, peter} = require('./4-firstmodule');
const sayHi = require('./5-utils');

const {singlePerson, items} = require('./6-alternative-flavor')
// console.log(names);
require('./7-mind-granade');
console.log(singlePerson);
console.log(items);
sayHi('susan');
sayHi(john);
sayHi(peter);

