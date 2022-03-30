const { EventEmitter } = require('events');

class EventHandler
{
    /**@private */
    eventHandler;
    /**@private */
    eventStack

    constructor()
    {
        this.eventHandler = new EventEmitter();
        this.eventStack   = [];
    }

    /**
     * @public 
     * @param {string} value 
     */
    addEventAction(value)
    {
        this.eventStack.push(value);
    }

    /**
     * @public
     * @param {number} value
     */
    getEventAction(value)
    {
        return this.eventStack[value];
    }

    /**
     * @public
     * @param {string} action
     * @param {Function} callback
     */
    triggerAction(action, callback = {} )
    {
        this.eventHandler.emit(action, ()=>{callback});
    }

    /**
     * @public
     * @param {string} action
     * @param {Function} callback
     */
    watchOneAction(action, callback = {} )
    {
        this.eventHandler.on(action, callback);
    }
}

module.exports = {EventHandler};