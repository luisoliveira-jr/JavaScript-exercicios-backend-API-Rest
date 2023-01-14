const livros = require('../dados/livros');
let proxId = 3;

const listarLivros = (req, res) => {
    return res.json(livros);
};

const obterlivro = (req, res) => {
    const livroId = Number(req.params.id);

    if (isNaN(livroId)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    }

    const livro = livros.find(livro => livro.id === livroId);

    if (!livro) {
        return res.status(404).json({ mensagem: "Não existe livro para o ID informado." });
    }

    return res.json(livro);
};

const cadastrarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo) {
        return res.status(400).json({ mensagem: 'O campo título é obrigatório.' });
    };

    if (!autor) {
        return res.status(400).json({ mensagem: 'O campo autor é obrigatório.' });
    };

    if (!ano) {
        return res.status(400).json({ mensagem: 'O campo ano é obrigatório.' });
    };

    if (!numPaginas) {
        return res.status(400).json({ mensagem: 'O campo numPaginas é obrigatório.' });
    };

    const novoLivro = {
        id: proxId,
        titulo,
        autor,
        ano,
        numPaginas
    };

    livros.push(novoLivro);

    proxId++;

    return res.json(novoLivro);
};

const alterarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo) {
        return res.status(400).json({ mensagem: 'O campo título é obrigatório.' });
    };

    if (!autor) {
        return res.status(400).json({ mensagem: 'O campo autor é obrigatório.' });
    };

    if (!ano) {
        return res.status(400).json({ mensagem: 'O campo ano é obrigatório.' });
    };

    if (!numPaginas) {
        return res.status(400).json({ mensagem: 'O campo numPaginas é obrigatório.' });
    };

    const livroExistente = livros.find(livro => livro.id === Number(req.params.id));

    if (!livroExistente) {
        return res.status(404).json({ mensagem: "Não existe livro a ser substituido para o ID informado." });
    };

    livroExistente.titulo = titulo;
    livroExistente.autor = autor;
    livroExistente.ano = ano;
    livroExistente.numPaginas = numPaginas;

    return res.json({ mensagem: "Livro substituído." });
}

const editarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    const livroExistente = livros.find(livro => livro.id === Number(req.params.id));

    if (!livroExistente) {
        return res.status(404).json({ mensagem: "Não existe livro a ser editado para o ID informado." });
    };

    if (titulo) {
        livroExistente.titulo = titulo;
    };

    if (autor) {
        livroExistente.autor = autor;
    };

    if (ano) {
        livroExistente.ano = ano;
    };

    if (numPaginas) {
        livroExistente.numPaginas = numPaginas;
    };

    return res.json({ mensagem: "Livro atualizado." });
};

const deletarLivro = (req, res) => {
    const indiceLivro = livros.findIndex(livro => livro.id === Number(req.params.id));

    if (indiceLivro < 0) {
        return res.status(404).json({ mensagem: "Não existe livro a ser excluido para o ID informado." });
    };

    livros.splice(indiceLivro, 1);

    return res.json({ mensagem: "Livro atualizado." });
}

module.exports = {
    listarLivros,
    obterlivro,
    cadastrarLivro,
    alterarLivro,
    editarLivro,
    deletarLivro
};