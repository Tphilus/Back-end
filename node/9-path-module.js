const path = require("path");

console.log(path.sep);

const filePath = path.join("./content", "subfolder", "test.js");

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.js");
console.log(absolute);
