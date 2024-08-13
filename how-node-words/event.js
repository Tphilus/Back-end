const EventEmitter = require("events");
const http = require("http");

// const myEmitter = new EventEmitter();

class Sales extends EventEmitter{
    constructor() {
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
    console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
    console.log("Costomer name: Francis");
})


myEmitter.on("newSale", stock => {
    console.log(`There are now ${stock} items left in stock`);
})

myEmitter.emit("newSale");


//////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received')
    res.end("Resquest received")
})

server.on('request', (req, res) => {
    res.end("Another request 😊")
})

server.on('close', () => {
    console.log("Server closed");
})


server.listen(8000, "127.0.0.1", () => {
    console.log("Waiting for request...");
})

