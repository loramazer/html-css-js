// controllers/loginController.js
const db = require('../config/db');
const bcrypt = require('bcrypt');

// Função para realizar login
exports.loginCliente = (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).send('Email e senha são obrigatórios.');
    }

    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.status(401).send('Email ou senha incorretos.');
        }

        const usuario = results[0];
        bcrypt.compare(senha, usuario.senha, (err, match) => {
            if (err) throw err;

            if (match) {
                // Sucesso no login
                req.session.usuarioId = usuario.cliente_id;  // Armazena o ID do cliente na sessão
                return res.send('Login realizado com sucesso!');
            } else {
                return res.status(401).send('Email ou senha incorretos.');
            }
        });
    });
};
