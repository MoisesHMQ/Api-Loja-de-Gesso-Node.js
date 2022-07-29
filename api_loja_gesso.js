const { request, response } = require('express');
const express = require('express')
const app = express();
var uuid = require('uuid');

app.use(express.json());

const cliente = [];

app.post('/cadastro/cliente', (request, response) => {
    const validarcliente = cliente.find((user) => user.cpf == request.body.cpf)
        if (validarcliente){
            return response.send("Status: cliente Já Cadastrado.")}
        
        cliente.push({
        id: uuid.v4(),
        cpf: request.body.cpf
    })
    return response.send("cliente criado com sucesso.")
})

app.get('/listar/cliente', (request, response) => {
    console.log(request.body);
    return response.json(cliente)
})

app.delete('/excluir/cliente', (request,response) => {
    const id = cliente.indexOf('id');
    const delete_cliente = cliente.splice(id,1)
        
    return response.send(delete_cliente)
})

