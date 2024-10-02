const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuração do banco de dados MySQL
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'hotel',
    password: 'laura122',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Rota para cadastrar cliente
app.post('/cadastrarCliente', (req, res) => {
    const { nome, cpf, rg, endereco, telefone, email, preferencias, pontos_fidelidade, data_nascimento } = req.body;

    const sql = `
        INSERT INTO Clientes (nome, cpf, rg, endereco, telefone, email, preferencias, pontos_fidelidade, data_nascimento)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [nome, cpf, rg, endereco, telefone, email, preferencias, pontos_fidelidade, data_nascimento], (err, result) => {
        if (err) throw err;
        res.send('Cliente cadastrado com sucesso!');
    });
});

    // Passa null para pontos_fidelidade, pois não é fornecido pelo cliente
    const values = [nome, cpf, rg || null, endereco || null, telefone, email, preferencias || null, null, criado_em, atualizado_em];

    pool.execute(query, values, (err, results) => {
        if (err) {
            console.error('Erro ao cadastrar o cliente:', err);
            return res.status(500).json({ message: 'Erro ao cadastrar o cliente.', error: err });
        }
        res.json({ message: 'Cliente cadastrado com sucesso!', clienteId: results.insertId });
    });


// Rota para cadastrar uma nova reserva
app.post('/reservas', (req, res) => {
    const { cliente_id, quarto_id, data_checkin, data_checkout, preco, cod_promo } = req.body;

    // Verificar se todos os campos obrigatórios estão presentes
    if (!cliente_id || !quarto_id || !data_checkin || !data_checkout) {
        return res.status(400).json({ message: 'Cliente ID, Quarto ID, Data de Check-in e Data de Check-out são obrigatórios.' });
    }

    const status = 'confirmada'; // Status padrão
    const criado_em = new Date();
    const atualizado_em = new Date();

    const query = `
        INSERT INTO reservas (cliente_id, quarto_id, data_checkin, data_checkout, status, criado_em, atualizado_em, preco, cod_promo)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [cliente_id, quarto_id, data_checkin, data_checkout, status, criado_em, atualizado_em, preco || null, cod_promo || null];

    pool.execute(query, values, (err, results) => {
        if (err) {
            console.error('Erro ao cadastrar a reserva:', err);
            return res.status(500).json({ message: 'Erro ao cadastrar a reserva.', error: err });
        }
        res.json({ message: 'Reserva cadastrada com sucesso!', reservaId: results.insertId });
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
