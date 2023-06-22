const http = require('http')

const POST = 3000

const server = http.createServer((req, res) => {
    req.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo')
})

server.listen(PORT,() => {
    console.log(`server run in http://localhost:${POST}`)
})