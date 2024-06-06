const express = require('express');
const connection = require('./db');
const router = express.Router();

// Rota para listar todos os registros
router.get('/pedidos', (req, res) => {
  connection.query('SELECT * FROM pedidos', (err, results) => {
    if (err) {
      console.error('Erro ao buscar os registros:', err);
      res.status(500).json({ error: 'Erro ao buscar os registros' });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
router.get('/pedidos/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM pedidos WHERE idPedido = ?', [id], (err, results) => {
    if (err) {
      console.error('Erro ao buscar o registro:', err);
      res.status(500).json({ error: 'Erro ao buscar o registro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Registro não encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Rota para criar um novo registro
router.post('/pedidos', (req, res) => {
  const { nomeCliente, nomePrato, adicionais, quantidade, preco } = req.body;
  connection.query(
    'INSERT INTO pedidos (nomeCliente, nomePrato, adicionais, quantidade, preco) VALUES (?, ?, ?, ?, ?)', 
    [nomeCliente, nomePrato, adicionais, quantidade, preco], 
    (err, result) => {
      if (err) {
        console.error('Erro ao criar o registro:', err);
        res.status(500).json({ error: 'Erro ao criar o registro' });
        return;
      }
      res.status(201).json({ message: 'Registro criado com sucesso', id: result.insertId });
    }
  );
});

// Rota para excluir um registro pelo ID
router.delete('/pedidos/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM pedidos WHERE idPedido = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir o registro:', err);
      res.status(500).json({ error: 'Erro ao excluir o registro' });
      return;
    }
    res.json({ message: 'Registro excluído com sucesso' });
  });
});

module.exports = router;