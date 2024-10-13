const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'})
    console.log('user hit the server');
    res.end('Home page')
});

server.listen(5000, () => {
    console.log('the port is runing on 5000')
});

// console.log('Express Tutorial')
