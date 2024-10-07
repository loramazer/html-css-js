// server.js
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cadastroRoutes = require('./routes/cadastro');
const loginRoutes = require('./routes/login');
const reservaRoutes = require('./routes/reserva');  // Importa a rota de reservas

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'seu-segredo-aqui', resave: false, saveUninitialized: true }));

app.use('/cadastro', cadastroRoutes);
app.use('/auth', loginRoutes);
app.use('/reservas', reservaRoutes);  // Adiciona a rota de reservas

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
