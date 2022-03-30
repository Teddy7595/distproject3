const fetch  = require('node-fetch');
const XMLPr  = require('xml-js');

const ROUTE_SERVICES = [
    'http://localhost:5001',
    'http://localhost:5002',
    'http://localhost:5003'
];

/**@type {{name:string, active:boolean}[]} */
const STATUS_SERVERS = [];

/**
 * function dedicated to verify its a service is active
 */
const verifyService = async () =>
{
    for (const e of ROUTE_SERVICES) 
    {
        const resp = await fetch(`${e}/api/service/status`, {'method': 'GET'})
            .then(data =>  data.text())
            .then(data => JSON.parse(XMLPr.xml2json(data, {compact: true, spaces: 4})))
            .catch(err =>
            {
                console.error(`Problem detected: ${err}`);
            });

        console.log({name:resp?.root.message._text || 'nothing', active: resp?.root.OK._text || false});
        STATUS_SERVERS.push({name:resp?.root.message._text || 'nothing', active: resp?.root.OK._text || false});
    }
}


module.exports = {verifyService, STATUS_SERVERS};