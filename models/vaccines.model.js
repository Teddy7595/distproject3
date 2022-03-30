const mongoose = require('mongoose');
const unique   = require('mongoose-unique-validator');
const schema   = mongoose.Schema;

const acaresSchema = new schema({
    animalid: //animal id from animal service
    {
        type: String,
        required: [true, "its required"]
    },
    name: //vaccine name
    {
        type: String,
        required: [true, "its required"]
    },
    observation: //any explain
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
    }

});

acaresSchema.plugin(unique);

module.exports = mongoose.model("AcaresModel", acaresSchema);