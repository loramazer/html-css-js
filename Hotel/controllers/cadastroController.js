const db = require('../config/db');
const bcrypt = require('bcrypt');

// Função para cadastrar cliente
exports.cadastrarCliente = async (req, res) => {
    const { nome, cpf, rg, endereco, telefone, email, data_nascimento, senha } = req.body;

    if (!nome || !cpf || !telefone || !email || !senha) {
        return res.status(400).send('Todos os campos obrigatórios devem ser preenchidos.');
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    const sqlCliente = `
        INSERT INTO Clientes (nome, cpf, rg, endereco, telefone, email, data_nascimento)
        VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(sqlCliente, [nome, cpf, rg, endereco, telefone, email, data_nascimento], (err, result) => {
        if (err) throw err;
        
        const clienteId = result.insertId;

        // Cadastro do usuário
        const sqlUsuario = `
            INSERT INTO usuarios (cliente_id, email, senha)
            VALUES (?, ?, ?)`;

        db.query(sqlUsuario, [clienteId, email, hashedPassword], (err) => {
            if (err) throw err;
            res.send('Cliente cadastrado com sucesso!');
        });
    });
};

// Função para realizar o login
exports.loginCliente = (req, res) => {
    const { email, senha } = req.body;

    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    
    db.query(sql, [email], async (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            const usuario = results[0];
            const match = await bcrypt.compare(senha, usuario.senha);
            if (match) {
                res.send('Login bem-sucedido!');
            } else {
                res.status(401).send('Senha incorreta!');
            }
        } else {
            res.status(404).send('Usuário não encontrado!');
        }
    });
};
