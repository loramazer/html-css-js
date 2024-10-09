const Reserva = require('../models/reserva');

// Consulta disponibilidade de quartos
exports.consultarDisponibilidade = async (req, res) => {
  const { checkin, checkout, categoria } = req.query;

  try {
    const disponiveis = await Reserva.verificarDisponibilidade(checkin, checkout, categoria);
    if (disponiveis.length > 0) {
      res.json(disponiveis);
    } else {
      res.status(404).json({ message: 'Nenhum quarto disponível para as datas escolhidas.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao consultar disponibilidade.', error });
  }
};

// Realizar reserva
exports.fazerReserva = async (req, res) => {
  const reservaData = req.body;

  try {
    const reservaId = await Reserva.realizarReserva(reservaData);
    res.json({ message: 'Reserva realizada com sucesso!', reservaId });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao realizar a reserva.', error });
  }
};

// Aplicar pacote promocional
exports.aplicarPacote = async (req, res) => {
  const { pacote, checkin, checkout } = req.body;

  try {
    const desconto = await Reserva.aplicarPacotePromocional(pacote, checkin, checkout);
    res.json({ desconto });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao aplicar o pacote promocional.', error });
  }
};
