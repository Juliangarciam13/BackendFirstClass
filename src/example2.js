const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if(err) {
            req.writeHead(404);
            res.write('Errpr: file not found');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            console.log(req.url)
            console.log(req.method)
            console.log(req.headers)
        }
        res.end();
        });
    })

    server.listen(PORT, () => {
        console.log(`server run in http://localhost:${PORT}`)
    })