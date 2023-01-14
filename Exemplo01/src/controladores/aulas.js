let { identificadorAula, instrutores, aulas } = require('../bancodedados');

const listarAulas = (req, res) => {
    return res.status(200).json(aulas);
};

const cadastrarAula = (req, res) => {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' });
    };

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    };

    aulas.push(aula);

    return res.status(201).json(aula);

};

const obterAula = (req, res) => {
    const { id } = req.params;

    const aula = aulas.find((aula) => {
        return aula.id === Number(id);
    });

    if (!aula) {
        return res.status(404).json({ mensagem: 'Aula não encontrada.' });
    };

    return res.status(200).json(aula);
}

const obterAulasInstrutor = (req, res) => {
    const { idInstrutor } = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' });
    };

    const aulasEncontradas = aulas.filter((aula) => {
        return aula.instrutor_id === instrutor.id;
    });

    return res.status(200).json(aulasEncontradas);
}

module.exports = {
    cadastrarAula,
    listarAulas,
    obterAula,
    obterAulasInstrutor
};