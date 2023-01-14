const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]

const listarConvidados = (req, res) => {

    if (!req.query.nome) {
        return res.json(convidados);
    };

    const buscarConvidado = convidados.find(convidado => convidado === req.query.nome);

    if (!buscarConvidado) {
        return res.status(404).json({ mensagem: "O convidado buscado não está presente na lista." });
    }

    return res.json({ mensagem: "O convidado presente." });
};

const cadastrarConvidado = (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'O campo deve ser informado no body da requisição.' });
    };

    const convidadoExistente = convidados.find(convidado => convidado === nome);

    if (convidadoExistente) {
        return res.status(400).json({ mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." });
    };

    convidados.push(nome);

    return res.status(201).json({ mensagem: 'Convidado adicionado.' });
};

const deletarConvidado = (req, res) => {
    const { nome } = req.params;

    const indiceConvidado = convidados.findIndex(convidado => convidado === nome);

    if (indiceConvidado < 0) {
        return res.status(404).json({ mensagem: "O convidado a ser removido não está presente na lista." });
    };

    convidados.splice(indiceConvidado, 1);

    return res.json({ mensagem: "Convidado removido." });
}

module.exports = {
    listarConvidados,
    cadastrarConvidado,
    deletarConvidado
}
