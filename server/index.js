const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const messagesController = require('./controllers/messages_controller')


const port = 4000;
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"))

app.post('/api/messages', messagesController.create);

app.get('/api/messages',messagesController.read);

app.put('/api/messages/:id', messagesController.update);

app.delete('/api/messages/:id', messagesController.delete)

app.listen(port, ()=>{
    console.log('listening on port', port)
})