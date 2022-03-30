const router            = require('express').Router;
const medic             = router();
const {MedicService}     = require('../services/smedic.service');
const userService       = new MedicService();
const xmlParser         = require('xml-js');

medic.get('/service/status', (req, res)=>
{
    /**@type {import('../interfaces')._Response} */
    const resp ={
        'message': 'STAFF_MEDIC_SERVICE',
        'status': 200,
        'error': 'Nothing',
        'data': 'Route medic operative',
        'OK': true
    }

    const a  = xmlParser.json2xml({root: resp}, {compact: true, ignoreComment: true, spaces: 4, ignoreDoctype: false});

    return res.status(resp.status).send(a);
})

medic.get('/medic/all', async(req, res) => 
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
                id:             resp.data?._id.toString(),
                userid:         resp.data?.userid,
                type:           resp.data?.type,
                workshift:      resp.data?.workshift,
                create_at:      resp.data?.create_at,
                update_at:      resp.data?.update_at    
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

medic.post('/medic/one', async(req, res) => 
{   
    const id = req.body?.root.code[0].toString();

    /**@type {import('../interfaces')._Response} */
    let resp = {};

    try 
    {
        resp = await userService.getOneUser(id);

        const a ={
            id:             resp.data?._id.toString(),
            userid:         resp.data?.userid,
            type:           resp.data?.type,
            workshift:      resp.data?.workshift,
            create_at:      resp.data?.create_at,
            update_at:      resp.data?.update_at    
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

medic.post('/medic', async(req, res) => 
{
    const data = {
        userid          :req.body?.root.data[0].name[0],
        type            :req.body?.root.data[0].lastname[0],
        workshift       :req.body?.root.data[0].email[0]
    };

    /**@type {import('../interfaces')._Response} */
    let resp = {};

    try 
    {
        resp = await userService.addOneUser(data);

        const a ={
            id:             resp.data?._id.toString(),
            userid:         resp.data?.userid,
            type:           resp.data?.type,
            workshift:      resp.data?.workshift,
            create_at:      resp.data?.create_at,
            update_at:      resp.data?.update_at    
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

medic.put('/medic', async(req, res) => 
{
    const data = {
        userid      :req.body?.root.data[0].name[0],
        workshift   :req.body?.root.data[0].lastname[0],
        type        :req.body?.root.data[0].email[0],
    };
    const id = req.body?.root.data[0].id[0];

    /**@type {import('../interfaces')._Response} */
    let resp = {};

    try 
    {
        resp = await userService.putOneUser(id, data);

        const a ={
            id:             resp.data?._id.toString(),
            userid:         resp.data?.userid,
            type:           resp.data?.type,
            workshift:      resp.data?.workshift,
            create_at:      resp.data?.create_at,
            update_at:      resp.data?.update_at    
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

medic.delete('/medic', async(req, res) => 
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

module.exports = {medic};