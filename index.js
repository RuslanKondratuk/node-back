const http = require('http');
const express = require('express');
const app = express();
const bodyParser = express.json();
const {validateUser} = require('./mw/validation.mw');
const UserController = require('./controllers/User.controller')
const PORT = 3000;

const server = http.createServer(app);

app.post('/user', bodyParser, validateUser, UserController.createUser)
app.get('/users', UserController.getAllUsers)
app.get('/users/:userId', UserController.getOneUser)
app.delete('/users/:userId', UserController.deleteUser)
app.put('/users/:userId', bodyParser, validateUser, UserController.updateUser)

server.listen(PORT, () => {
    console.log('App is started');
})

