const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/') {
    fs.readFile('index.html', (err, data) => {
        if(err) {
            req.writeHead(404);
            res.write('Error: file not found');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            console.log(req.url)
            console.log(req.method)
            console.log(req.headers)
        }
        res.end();
        });
    } else {
        res.writeHead(404);
        res.end(http.STATUS_CODES[404])
    }
    });

    server.listen(PORT, () => {
        console.log(`server run in http://localhost:${PORT}`)
    })