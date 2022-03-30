const router            = require('express').Router;
const users             = router();
const {UserService}     = require('../services/user.service');
const userService       = new UserService();
const xmlParser         = require('xml-js');

users.get('/service/status', (req, res)=>
{
    /**@type {import('../interfaces')._Response} */
    const resp ={
        'message': 'USER_SERVICE',
        'status': 200,
        'error': 'Nothing',
        'data': 'Route users operative',
        'OK': true
    }

    const a  = xmlParser.json2xml({root: resp}, {compact: true, ignoreComment: true, spaces: 4, ignoreDoctype: false});

    return res.status(resp.status).send(a);
})

users.get('/user/all', async(req, res) => 
{
    /**@type {import('../interfaces')._Response} */
    let resp = {};

    try 
    {
        resp = await userService.getALLUser();
        let ax = [];

        for (const iterator of resp.data) 
        {
            const a ={
                id:         iterator?._id.toString(),
                name:       iterator?.name,
                lastname:   iterator?.lastname,
                dir:        iterator?.dir,
                email:      iterator?.email,
                create_at:  iterator?.create_at,
                update_at:  iterator?.update_at    
            }

            ax.push(a);
        }

        resp.data = ax;

    } catch (error) 
    {
        resp.status     = 500;
        resp.OK         = false;
        resp.error      = error;
        resp.message    = 'Error detected';
        resp.data       = undefined;

        console.log(error);
    }

    const a  = xmlParser.json2xml({root: resp}, {compact: true, ignoreComment: true, spaces: 4, ignoreDoctype: false});

    return res.status(resp.status).send(a);
});

users.post('/user/one', async(req, res) => 
{   
    const id = req.body?.root.code[0].toString();

    /**@type {import('../interfaces')._Response} */
    let resp = {};

    try 
    {
        resp = await userService.getOneUser(id);

        const a ={
            id:        resp.data?._id.toString(),
            name:       resp.data?.name,
            lastname:   resp.data?.lastname,
            dir:        resp.data?.dir,
            email:      resp.data?.email,
            create_at:  resp.data?.create_at    
        }

        resp.data = a;

    } catch (error) 
    {
        resp.status     = 500;
        resp.OK         = false;
        resp.error      = error;
        resp.message    = 'Error detected';
        resp.data       = undefined;
    }

    const a  = xmlParser.json2xml({root: resp}, {compact: true, ignoreComment: true, spaces: 4, ignoreDoctype: false});

    return res.status(resp.status).send(a);
});

users.post('/user', async(req, res) => 
{
    const data = {
        name        :req.body?.root.data[0].name[0],
        lastname    :req.body?.root.data[0].lastname[0],
        email       :req.body?.root.data[0].email[0],
        dir         :req.body?.root.data[0].dir[0]
    };

    /**@type {import('../interfaces')._Response} */
    let resp = {};

    try 
    {
        resp = await userService.addOneUser(data);

        const a ={
            id:        resp.data?._id.toString(),
            name:       resp.data?.name,
            lastname:   resp.data?.lastname,
            dir:        resp.data?.dir,
            email:      resp.data?.email,
            create_at:  resp.data?.create_at    
        }

        resp.data = a;

    } catch (error) 
    {
        resp.status     = 500;
        resp.OK         = false;
        resp.error      = error;
        resp.message    = 'Error detected';
        resp.data       = undefined;
    }

    const a  = xmlParser.json2xml({root: resp}, {compact: true, ignoreComment: true, spaces: 4, ignoreDoctype: false});

    return res.status(resp.status).send(a);
    
});

users.put('/user', async(req, res) => 
{
    const data = {
        name        :req.body?.root.data[0].name[0],
        lastname    :req.body?.root.data[0].lastname[0],
        email       :req.body?.root.data[0].email[0],
        dir         :req.body?.root.data[0].dir[0]
    };
    const id = req.body?.root.data[0].id[0];

    /**@type {import('../interfaces')._Response} */
    let resp = {};

    try 
    {
        resp = await userService.putOneUser(id, data);

        const a ={
            id:        resp.data?._id.toString(),
            name:       resp.data?.name,
            lastname:   resp.data?.lastname,
            dir:        resp.data?.dir,
            email:      resp.data?.email,
            create_at:  resp.data?.create_at    
        }

        resp.data = a;

    } catch (error) 
    {
        resp.status     = 500;
        resp.OK         = false;
        resp.error      = error;
        resp.message    = 'Error detected';
        resp.data       = undefined;
    }

    const a  = xmlParser.json2xml({root: resp}, {compact: true, ignoreComment: true, spaces: 4, ignoreDoctype: false});

    return res.status(resp.status).send(a);
});

users.delete('/user', async(req, res) => 
{
    const id = req.body?.root.code[0].toString();

    /**@type {import('../interfaces')._Response} */
    let resp = {};

    try 
    {
        resp = await userService.delOneUser(id);

    } catch (error) 
    {
        resp.status     = 500;
        resp.OK         = false;
        resp.error      = error;
        resp.message    = 'Error detected';
        resp.data       = undefined;
    }

    const a  = xmlParser.json2xml({root: resp}, {compact: true, ignoreComment: true, spaces: 4, ignoreDoctype: false});

    return res.status(resp.status).send(a);
});

module.exports = {users};