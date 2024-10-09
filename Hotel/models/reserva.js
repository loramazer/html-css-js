const db = require('../config/db'); // Conexão com o banco de dados

// Função para verificar disponibilidade de quartos
exports.verificarDisponibilidade = async (checkin, checkout, categoria) => {
  const query = `
    SELECT * FROM quartos WHERE categoria = ? 
    AND id NOT IN (
      SELECT quarto_id FROM reservas 
      WHERE data_checkin < ? AND data_checkout > ?
    )
  `;
  const [result] = await db.query(query, [categoria, checkout, checkin]);
  return result;
};

// Função para realizar uma reserva
exports.realizarReserva = async (reservaData) => {
  const query = `
    INSERT INTO reservas (cliente_id, quarto_id, data_checkin, data_checkout, preco_total, status) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.query(query, [
    reservaData.cliente_id, 
    reservaData.quarto_id, 
    reservaData.checkin, 
    reservaData.checkout, 
    reservaData.preco_total, 
    'confirmada'
  ]);
  return result.insertId; // Retorna o ID da reserva
};

// Função para aplicar pacotes promocionais
exports.aplicarPacotePromocional = async (pacote, data_checkin, data_checkout) => {
  const query = `
    SELECT * FROM pacotes_promocionais 
    WHERE nome = ? AND data_inicio <= ? AND data_fim >= ?
  `;
  const [result] = await db.query(query, [pacote, data_checkin, data_checkout]);
  return result.length ? result[0].desconto : 0; // Retorna o desconto
};
