const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

// Rota para cadastrar cliente
router.post('/cadastrar', cadastroController.cadastrarCliente);

// Outras rotas para fidelidade e histórico podem ser integradas aqui

module.exports = router;
