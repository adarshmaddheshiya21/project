const http = require('http');

const server = http.createServer((req, res)=> {
    if(req.url === '/') {
        res.end("Welcome to homepage.");
    }else if(req.url === '/about') {
        res.end("Welcome to the about page");
    }else {
        res.end(`<p>not found</p><a href="/">Back to home page</a>`);
    }
})

server.listen(5000);