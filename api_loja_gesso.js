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

const funcionario = [];

app.post('/cadastro/funcionario', (request, response) => {
    const validarfuncionario = funcionario.find((vf) => vf.nome == request.body.nome)
        if (validarfuncionario){
            return response.send("Status: nome Já Cadastrado.")}
        
        funcionario.push({
        id: uuid.v4(),
        nome: request.body.nome,
        função: request.body.função
    })
    return response.send("Resgistrado com sucesso.")
})

app.post('/login', (request, response) => {
    const login = funcionario.find((user) => user.nome == request.body.nome && user.função == request.body.função)
        if(login){
            return response.send("Status: Bom dia, tenha um bom trabalho")

        }else{
            return response.send("Erro: nome ou função incorretos.");
        }
    })

app.get('/listar/funcionario', (request, response) => {
    console.log(request.body);
    return response.json(funcionario)
})

app.delete('/excluir/funcionarios', (request,response) => {
    const id = funcionario.indexOf('id');
    const delete_funcionarios = funcionario.splice(id,1)
        
    return response.send(delete_funcionarios)
})

const produtos = [];

app.post('/cadastro/produtos', (request, response) => {
    const validar_ = produtos.find((user) => user.produto == request.body.produto)
        if (validar_){
            return response.send("Status: Produto Já Cadastrado.")}
        
        produtos.push({
        id: uuid.v4(),
        produto: request.body.produto

    })
    return response.send("Produto cadastrado com sucesso.")
})

app.get('/listar/produtos', (request, response) => {
    console.log(request.body);
    return response.json(produtos)
})

app.delete('/excluir/produtos', (request,response) => {
    const id = produtos.indexOf('id');
    const delete_produtos = produtos.splice(id,1)
        
    return response.send(delete_produtos)
})

app.listen(3000, () => {
    console.log('Loja online...')
})