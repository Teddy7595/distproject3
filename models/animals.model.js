const mongoose = require('mongoose');
const unique   = require('mongoose-unique-validator');
const schema   = mongoose.Schema;

const acaresSchema = new schema({
    name:
    {
        type: String,
        required: [true, "its required"]
    },
    weight:
    {
        type: String,
        required: [true, "its required"]
    },
    type:
    {
        type: String,
        required: [true, "its required"]
    },
    color:
    {
        type: String,
        required: [true, "its required"]
    },
    race:
    {
        type: String,
        required: [true, "its required"]
    },
    observations:
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