const express = require('express');
const mongo   = require('mongoose');
const env     = require('dotenv').config();
const XML     = require('express-xml-bodyparser');
const xml2js  = require('xml2js');
const app     = express();
const {users} = require('./controllers/user.controller');


const main = ()=>
{
    
    mongo.connect(`${process.env.MONGOURI}`,{ 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoCreate: true
    }).then(() => console.log('Database conection stablish!'))
    .catch((e) => console.log(e));

    app.listen(process.env.ENV_PORT, ()=> console.log(`User service active en puerto: ${process.env.ENV_PORT}`));
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(XML());

    app.use('/api', users);
}

console.clear();
main();