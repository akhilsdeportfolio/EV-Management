const connect = require('./config/db')
// const express = require('express')
const app = require('./index')
// app.use(express.json())

app.listen(2000, async function (){
    await connect();
console.log("listening on port 2000");
});
