const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/user', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Lista de usuarios'
    });
});

app.post('/user', (req, res) => {
    let body = req.body;
    res.status(200).json(body);
});

app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    res.status(200).json({
        ok: true,
        message: `Se actualizó el usuario con ID: ${id}`,
        data: body
    });
});

app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    res.status(200).json({
        ok: true,
        message: `Se eliminó el usuario con ID: ${id}`,
        data: body
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});