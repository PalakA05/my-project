// const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const userSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, default: "xyz@gmail.com"},
    mobile_number: {type: Number, default: 0000000000},
    year: {type: Number, min: 2017, max: 2030},
    password: {type: String, require: true},
    dob: {type: Date},
    address: {
        street : {type: String},
        city: {type: String},
        pincode: {type: Number},
    }
});

const userModel = new model("users", userSchema);
console.log(userModel);
module.exports = userModel;