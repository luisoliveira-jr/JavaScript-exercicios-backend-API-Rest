const express = require('express');
const { listarConvidados, cadastrarConvidado, deletarConvidado } = require('./controladores/convidados')

const rotas = express();

rotas.get('/convidados', listarConvidados);
rotas.post('/convidados', cadastrarConvidado);
rotas.delete('/convidados/:nome', deletarConvidado);

module.exports = rotas;