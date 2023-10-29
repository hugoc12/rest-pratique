import 'dotenv/config';
import {randomUUID} from 'node:crypto';
import { fastify } from 'fastify';
import Database from './database/ApiDatabase.js';

const server = fastify();
const database = new Database();

server.post('/post', async (request, response) => {
    let data = request.body;
    try{
        await database.setUser(randomUUID(), data.name, data.idade);
    }catch(err){
        console.log(err);
    }
    return response.status(201).send();
})

server.get('/get', async (request, response) => {
    let optionalParameter = request.query.id;
    try{
        return await database.getUsers(optionalParameter);
    }catch(err){
        return err;
    }
})

server.put('/put/:id/:idade', async (request, response) => {
    let id = request.params.id;
    let idade = request.params.idade;
    try{
        await database.updateUser(id, idade);
    }catch(err){
        console.log(err);
    }
})

server.delete('/delete/:id',async (request, response) => {
    let id = request.params.id;
    try{
        await database.deleteUser(id);
    }catch(err){
        return err;
    }
})

server.listen({
    port: '3333'
})