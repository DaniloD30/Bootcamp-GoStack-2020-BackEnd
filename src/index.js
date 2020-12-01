const express = require('express');

const app = express();

app.use(express.json());

/** 
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação do back-end
 * PUT/PATCH: Alterar uma informação do back-end
 * DELETE: Deletar uma informação
 * 
 **/

app.get('/projects', (request, response) => {
    const query = request.query;
    console.log("query ->", query)

    return response.json([
        'Projeto 1',
        'Projeto 2'
    ])
});

app.post('/projects', (request, response) => {
    const body = request.body
    console.log("body ->", body)
    return response.json([
        'Projeto 1',
        'Projeto 2'
    ])
})

app.put('/projects/:id', (request, response) => {
    const params = request.params;
    console.log("params ->", params)

    return response.json([
        'Projeto 4',
        'Projeto 2'
    ])
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2'
    ])
})


app.listen(3333, () => {
    console.log('❤ Back-end started!')
});
