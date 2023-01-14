const express = require('express');
const rotas = require('./roteador');
const validaSenha = require('./intermediarios');

const app = express();

app.use(express.json());
app.use(validaSenha);
app.use(rotas);

app.listen(3000);