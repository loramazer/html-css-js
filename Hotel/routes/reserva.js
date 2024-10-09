const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

// Rota GET para exibir a página de reserva
router.get('/reserva', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/reserva.html'));
});

// Rota para consulta de disponibilidade
router.get('/disponibilidade', reservaController.consultarDisponibilidade);

// Rota para fazer reserva
router.post('/fazer-reserva', reservaController.fazerReserva);

// Rota para aplicar pacotes promocionais
router.post('/aplicar-pacote', reservaController.aplicarPacote);

module.exports = router;
