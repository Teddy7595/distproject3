const mongoose = require('mongoose');
const unique   = require('mongoose-unique-validator');

const schema   = mongoose.Schema;

const userSchema = new schema({
    name:
    {
        type: String,
        unique: [false, "Its not necesary"],
        required: [true, "Name is required"],
        default: "_"
    },
    lastname:
    {
        type: String,
        unique: [false, "Its not necesary"],
        required: [true, "Last name is required"],
        default: "_"
    },
    dir:
    {
        type: String,
        unique: [false, "Its not necesary"],
        required: [true, "Name is required"],
        default: "_"
    },
    email:
    {
        type: String,
        unique: [true, "This email already exist"],
        required: [true, "Name is required"],
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
        default: "_"
    },

});

//userSchema.plugin(unique);

module.exports = mongoose.model("UserModel", userSchema);