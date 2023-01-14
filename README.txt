API
É um conjunto de instruções que determina como se comunicar com uma aplicação.
Diversos sistemas disponibilizam API's para que sejam integradas com outros sistemas.
O servidor que estamos aprendendo a desenvolver, o qual chamamos de backend, também é uma API.
Uma API pode se comunicar com outra.

REST -> Representational State Transfer
É um conjunto de restrições de arquitetura que podem ser usadas para construção de API's.

Organização de uma API REST
-> Coleções de recursos: Os dados manipulados numa API REST é chamado de recurso e os recursos são agrupados em coleções.
--> Numa API de uma biblioteca,livro é um recurso e a listagem de livros é a coleção.
--> Podemos ter também uma coleção de autores e cada autor possuir uma coleção de livros.

-> Indentificadores de recursos: cada recurso possui um identificador, único e imutável.

-> Representação de representação de recursos com JSON (JavaScript Object Notation): JSON é uma notação em que utilizamos para representar os recursos.
--> É uma notação, baseada em JavaScript, usada para transitar dados na web.
--> É obrigatório que uma propriedade do JSON tenha "aspas duplas"

Manipulação de coleção de recursos
-> Numa requisição HTTP podemos definir métodos(verbos) para iniciar a ação a ser realizada no recurso.
--> GET: lista recursos de uma coleção e acessa um recurso específico.
--> POST: cadastra um novo recurso.
--> PUT: altera completamente um recurso.
--> PATCH: altera parcialmente um recurso.
--> DELETE: apaga um recurso.

Códigos de respostas HTTP -> Status Code
-> Em cada resposta de uma requisição HTTP utilizamos um código para informar o status da solicitação.
-> Uma requisição HTTP pode ser bem sucedida ou não. Sendo assim, usamos códigos de resposta para sucesso ou erro na requisição.
-> Também existem códigos informativos e redirecionamento, mas não usamos em respostas de APIs REST.

Série 200: Indica que a solicitação do cliente foi aceita com sucesso.
--> 200: Requisção bem sucedida.
--> 201: Created -> Requisição bem sucedia e algo foi criado.
--> 204: No content -> Requisição bem sucedida, sem conteúdo no corpo da resposta.

Série 400: Indica que a solicitação do cliente foi recebida, porém, possui erros.
--> 400: Bad Request -> O servidor não entendeu a requisção pois está com sintaxe inválida.
--> 401: Unauthorized -> O usuario não está autenticado.
--> 403: Forbidden -> O usuário não tem permissão para acessar o recurso solicitado.
--> 404: Not found -> O servidor não encontrou um recurso solicitado.

Série 500: Indica que houve algum erro no servidor.
--> 500: Internal Server Error: o servidor encontrou uma situação com a qual não sabe lidar ou um erro inesperado.



