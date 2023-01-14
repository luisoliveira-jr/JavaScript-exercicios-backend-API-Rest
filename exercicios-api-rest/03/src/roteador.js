const express = require('express');
const { listarLivros, obterlivro, cadastrarLivro, alterarLivro, editarLivro, deletarLivro } = require('./controladores/biblioteca');

const rotas = express();

rotas.get('/livros', listarLivros);
rotas.get('/livros/:id', obterlivro);
rotas.post('/livros', cadastrarLivro);
rotas.put('/livros/:id', alterarLivro);
rotas.patch('/livros/:id', editarLivro);
rotas.delete('/livros/:id', deletarLivro);

module.exports = rotas;