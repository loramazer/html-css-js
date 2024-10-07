// controllers/reservaController.js
const db = require('../config/db');

// Função para realizar uma reserva
exports.reservarQuarto = (req, res) => {
    const { quarto_id, data_checkin, data_checkout } = req.body;
    const cliente_id = req.session.usuarioId;  // Obtém o ID do cliente da sessão

    if (!quarto_id || !data_checkin || !data_checkout) {
        return res.status(400).send('Todos os campos são obrigatórios.');
    }

    const sql = `
        INSERT INTO Reservas (cliente_id, quarto_id, data_checkin, data_checkout)
        VALUES (?, ?, ?, ?)`;

    db.query(sql, [cliente_id, quarto_id, data_checkin, data_checkout], (err, result) => {
        if (err) throw err;

        res.send('Reserva realizada com sucesso!');
    });
};
