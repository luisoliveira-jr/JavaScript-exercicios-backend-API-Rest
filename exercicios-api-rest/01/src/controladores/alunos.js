const alunos = require('../dados/alunos');

let idNovoAluno = 1;

const listarAlunos = (req, res) => {
    return res.json(alunos);
};

const obterAluno = (req, res) => {
    const idReq = Number(req.params.id);

    if (isNaN(idReq)) {
        return res.status(400).json({ mensagem: 'O id informado não é um número válido.' });
    };

    const aluno = alunos.find((aluno) => {
        return aluno.id === idReq;
    });

    if (!aluno) {
        return res.status(400).json({ mensagem: 'O aluno não encontrado.' });
    };

    return res.json(aluno);
};

const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome deve ser informado.' })
    };

    if (!sobrenome) {
        return res.status(400).json({ mensagem: 'O sobrenome deve ser informado.' })
    };

    if (!idade) {
        return res.status(400).json({ mensagem: 'A idade deve ser informada.' })
    };

    if (!curso) {
        return res.status(400).json({ mensagem: 'O curso deve ser informado.' })
    };

    if (idade < 18) {
        return res.status(400).json({ mensagem: 'O aluno deve ter pelo menos 18 anos.' })
    };

    const novoAluno = {
        id: idNovoAluno,
        nome,
        sobrenome,
        idade,
        curso
    };

    alunos.push(novoAluno);

    idNovoAluno++;

    res.status(201).send();
};

const excluirAluno = (req, res) => {
    const idReq = Number(req.params.id);

    if (isNaN(idReq)) {
        return res.status(400).json({ mensagem: 'O id informado não é um número válido.' });
    };

    const indiceExcluirAluno = alunos.findIndex((aluno) => {
        return aluno.id === idReq;
    });

    if (!indiceExcluirAluno) {
        return res.status(400).json({ mensagem: 'O aluno não encontrado.' });
    };

    const alunoExcluido = alunos.splice(indiceExcluirAluno, 1);

    return res.status(200).json(alunoExcluido);

}

module.exports = {
    listarAlunos,
    obterAluno,
    cadastrarAluno,
    excluirAluno
};