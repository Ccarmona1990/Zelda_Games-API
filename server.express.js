// server.js
const server = require('express')();
const zelda_games = require('./data')
const port = process.env.PORT || 8080;

server.get('/',(req,res)=>{
    res.json(zelda_games)
})

server.listen(port)