const bancodedados = {
    identificadorInstrutor: 4,
    identificadorAula: 2,
    instrutores: [
        {
            id: 1,
            nome: 'Guido',
            email: 'guido@email.com',
            status: true
        },
        {
            id: 2,
            nome: 'Dani',
            email: 'danio@email.com',
            status: true
        },
        {
            id: 3,
            nome: 'José',
            email: 'jose@email.com',
            status: true
        },
    ],
    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: 'Primeiro Servidor',
            descricao: 'Construindo o primeiro servidor'
        },
    ]
}

module.exports = bancodedados;