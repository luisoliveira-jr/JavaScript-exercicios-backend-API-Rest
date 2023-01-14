const express = require('express');
const {
    cadastrarInstrutor,
    listarInstrutores,
    obterInstrutor,
    atualizarInstrutor,
    alterarStatusInstrutor,
    excluirInstrutor } = require('./controladores/instrutores');
const {
    cadastrarAula,
    listarAulas,
    obterAula,
    obterAulasInstrutor } = require('./controladores/aulas');


const rotas = express();

//Rotas intrutores
rotas.post('/instrutores', cadastrarInstrutor);
rotas.get('/instrutores', listarInstrutores);
rotas.get('/instrutores/:id', obterInstrutor);
rotas.put('/instrutores/:id', atualizarInstrutor);
rotas.patch('/instrutores/:id/status', alterarStatusInstrutor);
rotas.delete('/instrutores/:id', excluirInstrutor);

//Rotas aulas
rotas.post('/instrutores/:idInstrutor/aulas', cadastrarAula);
rotas.get('/aulas', listarAulas);
rotas.get('/aulas/:id', obterAula);
rotas.get('/instrutores/:idInstrutor/aulas', obterAulasInstrutor);

module.exports = rotas;