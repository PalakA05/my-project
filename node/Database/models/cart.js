const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const cartSchema = new Schema({
    user_id : {type : Number, require : true},
    product_id : {type : String},
    total : {type : Number},
    pay_id : {type : String},
});
const cartModel = new model("cart", cartSchema);
console.log(cartModel);
module.exports = cartModel;