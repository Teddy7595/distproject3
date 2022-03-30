const _medicModel    = require("../models/staff_medic.model");
const DataService  = require("./data.service");

class MedicService
{
    constructor()
    {
        /** @private */
        this._medicModel    = _medicModel;
        /** @private */
        this._dataService  = new DataService();
    }

    /**
     * @public
     * @param {string} _id
     */
    async getOneUser(_id)
    {
        /**@type {import('../interfaces')._argsFind} */
        const args = {'findObject': {_id}, 'select': '-__v'};
        return await this._dataService._findOneInDB(this._medicModel, args);
    }

    /**
     * @public
     */
    async getALLUser()
    {
        /**@type {import('../interfaces')._argsFind} */
        const args = {'findObject': {}, 'select': '-__v'};
        return await this._dataService._findAllDB(this._medicModel, args);
    }

    /**
     * @public
     * @param {import('../interfaces')._medicModel} user
     */
    async addOneUser(user)
    {
        const data = new this._medicModel(user);
        data.update_at = '_';

        const resp = await this._dataService._saveDB(data);

        return resp;
    }

    /**
     * @public
     * @param {string} id
     * @param {import('../interfaces')._medicModel} user
     */
    async putOneUser(id, user)
    {
        user.update_at = new Date().toDateString();

        /**@type {import('../interfaces')._argsUpdate} */
        const _args ={
            'findObject': {'_id': id},
            'set': {$set: user }
        };

        let resp =  {};

        try {
           resp =  await this._dataService._updateOneInDB(this._medicModel, _args);
           resp.data = await (await this._dataService._findOneInDB(this._medicModel, _args)).data;
        } catch (error) {
            resp.status = 500;
            resp.error = error;
        }

        return resp;
    }

    /**
     * @public
     * @param {string} _id
     */
    async delOneUser(_id)
    {
        return await this._dataService._hardDelete(this._medicModel, _id);
    }
}

module.exports = {MedicService}