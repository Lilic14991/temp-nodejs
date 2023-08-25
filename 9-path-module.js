const path = require('path');

// specific path separator
console.log(path.sep);

// join paths and normalized it
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);
// gets basename of the filepath
const base = path.basename(filePath);
console.log(base);

// getting absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);