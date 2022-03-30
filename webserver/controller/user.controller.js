const router = require('express').Router;
const users  = router();
const {STATUS_SERVERS} = require('../server.discover');

users.get('/users', (req, res) => 
{
    
});

users.get('/user/:id', (req, res) => 
{
    
});

users.post('/user', (req, res) => 
{
    
});

users.put('/user', (req, res) => 
{
    
});

users.delete('/user', (req, res) => 
{
    
});

module.exports = {users};