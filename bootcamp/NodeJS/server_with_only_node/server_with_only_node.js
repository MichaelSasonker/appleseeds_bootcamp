const http = require('http');
const fs = require('fs');
const path = require('path');
const usersJSON = require('./users.json');

const PORT = 3000;

const server = http.createServer((request, respone) => {
    // console.log(request.method);
    if (request.method === "GET") {
        switch (request.url) {
            case "/":
            case "/index.html":
                fs.readFile("./index.html", (err, content) => {
                    if (content) {
                        respone.writeHead(200, { "Content-Type": "text/html" });
                        respone.end(content, "utf-8");
                    }
                    else {
                        respone.writeHead(500);
                        respone.end("Please talk your administator, error: " + err.code);
                    }
                });
                break;
            case "/index.css":
                fs.readFile("./index.css", (err, content) => {
                    if (content) {
                        respone.writeHead(200, { "Content-Type": "text/css" });
                        respone.end(content, "utf-8");
                    }
                    else {
                        respone.writeHead(500);
                        respone.end("Please talk your administator, error: " + err.code);
                    }
                });
                break;
            case "/raw-html":
                respone.writeHead(200, { "Content-Type": "text/html" });
                respone.end("<h1>Raw HTML Page</h1>", "utf-8");
                break;
            case "/users":
                respone.writeHead(200, { "Content-Type": "application/json" });
                respone.end(JSON.stringify(usersJSON), "utf-8");
                break;
            
            default:
                respone.writeHead(404);
                respone.end("Error 404");
                break;
        }
    }
    else {
        respone.writeHead(405);
        respone.end("You can only use GET requests!");
    }
});

server.listen(PORT, () => console.log("The server is listening in port: " + PORT));