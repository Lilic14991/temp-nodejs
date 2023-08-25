// GLOBALS - NO WINDOW !!!

console.log(__dirname); // __dirname - path to current directory
console.log(__filename); // __filename - filename
// require - function to use modules (CommonJS)
console.log(module); // module - info about current module (file)
console.log(process); // process - info about env where the program is being executed

setInterval(() => { // set interval to execute code inside the function in interval (1sec = 1000)
    console.log('hello world!')
}, 1000);
