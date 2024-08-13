const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
// console.log(start);

setTimeout(() => console.log("Timer 1 finished"), 0)
setTimeout(() => console.log("Immediate 1 finished"))
fs.readFile('test-file.txt', () => {
    console.log("I/0 finish");
    console.log("__________________"); 

setTimeout(() => console.log("Timer 1 finished"), 0)
setTimeout(() => console.log("Timer 3 finished"), 3000)
setTimeout(() => console.log("Immediate 1 finished"))

process.nextTick(() => console.log('Process.nextTick'))

crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, "Password encrypted");
})
})

console.log("Hello from the top-level code");