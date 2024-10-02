const express = require('express');
const router = express.Router();

// Rota para verificar a disponibilidade de quartos
router.post('/checkAvailability', async (req, res) => {
    const { startDate, endDate, tipoQuarto } = req.body;
    try {
        const result = await req.db.query(
            `SELECT * FROM quarto 
             WHERE tipo_quarto = $1 
             AND quarto_id NOT IN (
                 SELECT quarto_id FROM reservas 
                 WHERE inicio_estadia < $2 AND fim_estadia > $3
             ) AND status = 'disponível'`,
            [tipoQuarto, endDate, startDate]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao consultar disponibilidade');
    }
});

// Rota para realizar reservas (supondo que a tabela de reservas tenha a estrutura apropriada)
router.post('/bookRoom', async (req, res) => {
    const { quartoId, clienteData, inicioEstadia, fimEstadia } = req.body;
    try {
        const result = await req.db.query(
            `INSERT INTO reservas (quarto_id, cliente_id, inicio_estadia, fim_estadia)
             VALUES ($1, $2, $3, $4) RETURNING id`,
            [quartoId, clienteData.id, inicioEstadia, fimEstadia]
        );
        res.json({ reservaId: result.rows[0].id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao realizar reserva');
    }
});

// Rota para cadastrar um quarto
router.post('/addRoom', async (req, res) => {
    const { tipoQuarto, numeroQuarto, capacidade, precoNoite, descricao } = req.body;
    try {
        const result = await req.db.query(
            `INSERT INTO quarto (tipo_quarto, numero_quarto, capacidade, preco_noite, descricao, status)
             VALUES ($1, $2, $3, $4, $5, 'disponível') RETURNING quarto_id`,
            [tipoQuarto, numeroQuarto, capacidade, precoNoite, descricao]
        );
        res.json({ quartoId: result.rows[0].quarto_id });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao adicionar quarto');
    }
});

// Rota para listar todos os quartos
router.get('/rooms', async (req, res) => {
    try {
        const result = await req.db.query(`SELECT * FROM quarto`);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao listar quartos');
    }
});

module.exports = router;
