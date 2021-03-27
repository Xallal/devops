const bodyParser = require('body-parser')
const express = require("express");
const cors = require('cors');
const app = express();
const db = require('./queries')






const { Pool } = require('pg');

const pgClient = new Pool({
    user:"postgres",
    password:"12345678A!",
    database:"postgres",
    host:"mypostgres",
    port:"5432"
})





pgClient.on('connect',() => {
    console.log(`Postgress connected`) 

});

pgClient.query('CREATE TABLE IF NOT EXISTS users (ID SERIAL PRIMARY KEY, name varchar(30) , email varchar(50))').catch((err) =>{
console.log(`Nie udało się`) 
});

app.get("/", (req,res) => {res.send("Hello World")});

app.get('/users', db.getUsers)
app.get('/users/:id',db.cache, db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)





const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`API listening on port ${PORT}`) 
});




