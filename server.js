// server.js
const server = require('express')();
const cors = require('cors');
const fs = require('fs');
const port = process.env.PORT || 5500;

server.use(cors({
    origin: '*'
}))

server.get('/',(req,res)=>{
    const stream = fs.createReadStream('db.json', 'utf8');
    stream.on('open',()=>{
        stream.pipe(res)
    })
})

server.listen(port)