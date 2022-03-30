const express = require('express');
const app     = express();
const {verifyService, STATUS_SERVERS} = require('./server.discover');

const {users} = require('./controller/user.controller');

const main = async ()=>
{
    const _ROUTES = [
        users
    ];
    
    /**see wich services its active or online */
    await verifyService();

    app.listen(5000, () => console.log("WebServer main controller"));
    app.use(express.json());
    app.use('/api',_ROUTES); 
}

console.clear();
main()