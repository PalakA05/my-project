const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const productSchema = new Schema({
    product_name : {type : String, require : true},
    price : {type : Number, require : true},
    quantity : {type : Number, default : 0},
    manudate : {type : Date , default : 01-00-2022},
    exdate : {type : Date, default : 31-11-2022},
    image : {type : String},
    desc : {type : String},
    categoty : {type : String},
});
const productModel = new model("product", productSchema);
console.log(productModel);
module.exports = productModel;