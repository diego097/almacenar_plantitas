const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

app.get('/persons', (request, response) => {
  response.sendFile(__dirname +'/ListarPersonas.html');
});

server.listen(3000, () => {
  console.log('Server on port 3000');
});
