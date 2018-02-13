
let messages = [];
let id = 0;

module.exports = {
    create: (req, res)=>{
        let newMessage = req.body;
        newMessage.id = id;
        id++;
        messages.push(newMessage);
        res.send(messages);
    },
    read: (req, res)=>{
        res.send(messages);
    },
    update: (req, res)=>{
        messages.forEach((message, index)=>{
            if(message.id === Number(req.params.id)){
                let updatedmessage = Object.assign({}, message, req.body);
                messages.splice(index,1,updatedmessage);
            }
        })
        res.send(messages);
    },
    delete:(req, res)=>{
        messages.forEach((message, index)=>{
            if(message.id === Number(req.params.id)){
                messages.splice(index,1);
            }
        })
        res.send(messages);
    }
}