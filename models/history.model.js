const mongoose = require('mongoose');
const unique   = require('mongoose-unique-validator');
const schema   = mongoose.Schema;

const historySchema = new schema({
    animalid: //animal id from user service
    {
        type: String,
        required: [true, "its required"]
    },
    medicid: //medic id from user service
    {
        type: String,
        required: [true, "its required"]
    },
    observations: //medic id from user service
    {
        type: String,
        required: [false, "Its not necesary"],
    },
    vaccines: //medic id from user service
    {
        type: Array,
        required: [false, "Its not necesary"],
    },
    create_at:
    {
        type: String,
        unique: [false, "Its not necesary"],
        required: [false, "Its not necesary"]
    },
    update_at:
    {
        type: String,
        unique: [false, "Its not necesary"],
        required: [false, "Its not necesary"]
    },

});

historySchema.plugin(unique);

module.exports = mongoose.model("HistoryModel", historySchema);