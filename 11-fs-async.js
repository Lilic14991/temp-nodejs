const { readFile, writeFile} = require('fs');
// non-blocking code
// without second argument encoding we will get Buffer
console.log('start');
readFile('content/first.txt', 'utf8', (err, data) => {
    if(err) {
        console.log('Error reading file: ', err);
        return;
    }
    const first = data;
    readFile('content/second.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file: ', err);
            return; 
        }
        const second = data;
        const text = `Here is the result:\n${first}\n${second}`;
        writeFile('./content/result-async.txt', text, (err, data) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('done with the task');
        })
    })
})
console.log('starting the next task.')
