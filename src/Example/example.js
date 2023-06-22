const http = require('http');
const fs = require('fs');

const routes = {
    '/': 'index.html',
    '/home': 'home.html',
    '/producto': 'producto.html',
    '/contacto': 'contacto.html',
    '/acerca': 'acerca.html',
    '/404': '404.html',
};

const server = http.createServer((req, res) => {
    const { url } = req;

    if (routes[url]) {
        const filePath = routes[url];
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('Error: file not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            res.end();
        });
    } else {
        res.writeHead(404);
        res.end(routes['/404']);
    }
});

server.listen(3000, () => {
    console.log('Servidor en ejecución en http://localhost:3000');
});
