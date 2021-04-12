const http = require('http');
const url = require('url');
const port = 8001; 

const capsuleData = require('./capsules.json');
let capsules = capsuleData.capsules;

const server = http.createServer((request, respone) => { 
    const q = url.parse(request.url, true).query; 

    if (request.method === 'GET') { 
        if (request.url === "/getAll") { 
            respone.write(JSON.stringify(capsules));
        } 
        else if (request.url.includes('capsules')) { 
            respone.write(JSON.stringify(capsules[q.id - 1]));
        } 
        else if (request.url.includes('userByID')) { 
            let requested = [...capsules[0], ...capsules[1]].filter(item => {
                return item.id === parseInt(q.id)
            }) 
            respone.write(JSON.stringify(requested));
        } 
    } 

    respone.end();
}); 

server.listen(port, () => {
    console.log("Server runs at port " + port)
})