const mongoose = require('mongoose');
const unique   = require('mongoose-unique-validator');
const schema   = mongoose.Schema;

const userSchema = new schema({
    password: 
    {
        type: String,
        required: [true, "Password is required"]
    },
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

userSchema.plugin(unique);

module.exports = mongoose.model("UserModel", userSchema);