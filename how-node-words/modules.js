// console.log(arguments);
// console.log(require('module').wrapper);


const C = require('./test-module-1')
const calc1 = new C()
console.log(calc1.add(2, 5));
console.log(calc1.divide(3, 4));

// ecports
const {add, multiply, divid} = require("./test-module-2");
console.log(multiply(2, 5));

// caching
require('./test-module-3')();