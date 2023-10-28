import {createServer} from 'node:http';

const server = createServer((request, response)=>{
    console.log('OLÁ HUGO TUDO CERTO?');
    return response.end();
})

server.listen(3333);