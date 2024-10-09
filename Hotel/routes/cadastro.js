const express = require('express');
const path = require('path');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

// Rota GET para exibir a página de cadastro
router.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/cadastro.html'));
});

// Rota POST para processar o cadastro
router.post('/cadastrar', cadastroController.cadastrar);

module.exports = router;
