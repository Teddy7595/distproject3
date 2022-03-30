const mongoose = require('mongoose');
const unique   = require('mongoose-unique-validator');
const schema   = mongoose.Schema;

const acaresSchema = new schema({
    soperationid: //operations staff id from operations staff service
    {
        type: String,
        required: [true, "its required"]
    },
    animalid: //animal id from animal service
    {
        type: String,
        required: [true, "its required"]
    },
    coord: //coordenates where rescue was do it
    {
        type: Object,
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