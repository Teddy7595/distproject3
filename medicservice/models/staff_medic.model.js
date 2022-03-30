const mongoose = require('mongoose');
const unique   = require('mongoose-unique-validator');
const schema   = mongoose.Schema;

const medicSchema = new schema({
    userid: //user id from user service
    {
        type: String,
        required: [true, "UserID is required"]
    },
    type: // it is any spetialization
    {
        type: String,
        unique: [false, "Its not necesary"],
        required: [true, "Name is required"],
        default: "_" 
    },
    workshift:
    {
        type: String,
        unique: [false, "Its not necesary"],
        required: [true, "Last name is required"],
        default: "_"
    },
    create_at:
    {
        type: String,
        unique: [false, "Its not necesary"],
        required: [false, "Its not necesary"],
        default: new Date().toDateString()
    },
    update_at:
    {
        type: String,
        unique: [false, "Its not necesary"],
        required: [false, "Its not necesary"],
        default: '_'
    },

});

medicSchema.plugin(unique);

module.exports = mongoose.model("MedicModel", medicSchema);