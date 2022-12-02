const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const paySchema = new Schema({
    pay_type : {type : String, require : true},
});
const payModel = new model("payment", paySchema);
console.log(payModel);
module.exports = payModel;