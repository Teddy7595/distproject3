const mongoose = require('mongoose');
const unique   = require('mongoose-unique-validator');
const schema   = mongoose.Schema;

const acaresSchema = new schema({
    userid: //user id from user service
    {
        type: String,
        required: [true, "its required"]
    },
    animalid: //animal id from animal service
    {
        type: String,
        required: [true, "its required"]
    },
    soperationid: //operation staff id from operation staf service
    {
        type: String,
        required: [true, "its required"]
    },
    type: //type of health care
    {
        type: String,
        required: [true, "its required"]
    },
    observation: //operation staff id from operation staf service
    {
        type: String,
        required: [false, "its not required"]
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

acaresSchema.plugin(unique);

module.exports = mongoose.model("AcaresModel", acaresSchema);