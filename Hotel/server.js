const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require ('path');
const app = express();
const port = 3000;

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hotel',
    password: 'laura122'
});

db.connect((err) => {
    if (err) { 
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados com sucesso.');
});

// Configuração do body-parser para processar dados de formulários HTML
app.use(bodyParser.urlencoded({ extended: true }));
// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));
// Servir o arquivo HTML principal
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'index.html'));
});


// Rota para cadastrar cliente
app.post('/cadastrarCliente', (req, res) => {
    const { nome, cpf, rg, endereco, telefone, email, preferencias, pontos_fidelidade, data_nascimento } = req.body;

    const sql = `
        INSERT INTO Clientes (nome, cpf, rg, endereco, telefone, email, preferencias, pontos_fidelidade, data_nascimento)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
        nome, 
        cpf, 
        rg || null, 
        endereco || null, 
        telefone, 
        email, 
        preferencias || null, 
        0, // pontos_fidelidade como 0 por padrão
        data_nascimento || null
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Erro ao cadastrar o cliente:', err);
            return res.status(500).json({ message: 'Erro ao cadastrar o cliente.' });
        }
        res.json({ message: 'Cliente cadastrado com sucesso!', clienteId: result.insertId });
    });
});

    


// // Rota para cadastrar uma nova reserva
// app.post('/reservas', (req, res) => {
//     const { cliente_id, quarto_id, data_checkin, data_checkout, preco, cod_promo } = req.body;

//     // Verificar se todos os campos obrigatórios estão presentes
//     if (!cliente_id || !quarto_id || !data_checkin || !data_checkout) {
//         return res.status(400).json({ message: 'Cliente ID, Quarto ID, Data de Check-in e Data de Check-out são obrigatórios.' });
//     }

//     const status = 'confirmada'; // Status padrão
//     const criado_em = new Date();
//     const atualizado_em = new Date();

//     const query = `
//         INSERT INTO reservas (cliente_id, quarto_id, data_checkin, data_checkout, status, criado_em, atualizado_em, preco, cod_promo)
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;

//     const values = [cliente_id, quarto_id, data_checkin, data_checkout, status, criado_em, atualizado_em, preco || null, cod_promo || null];

//     pool.execute(query, values, (err, results) => {
//         if (err) {
//             console.error('Erro ao cadastrar a reserva:', err);
//             return res.status(500).json({ message: 'Erro ao cadastrar a reserva.', error: err });
//         }
//         res.json({ message: 'Reserva cadastrada com sucesso!', reservaId: results.insertId });
//     });
// });

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
