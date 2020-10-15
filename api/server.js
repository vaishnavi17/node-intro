//server.js
const express = require('express'),
  server = express(),
  users = require('./users'),
  bodyParser = require('body-parser');

server.use(bodyParser.json())

//setting the port.
server.set('port', process.env.PORT || 3000);

//Adding routes
server.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

server.get('/users', (request, response) => {
  response.json(users);
});

server.post('/add', (request, response) => {
  users.users.push(request.body);
  response.json(users);
});

//Binding to localhost://3000
server.listen(3000, () => {
  console.log('Express server started at port 3000');
});