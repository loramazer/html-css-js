// routes/login.js
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Rota para login
router.post('/login', loginController.loginCliente);

module.exports = router;
