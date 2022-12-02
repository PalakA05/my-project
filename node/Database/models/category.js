const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const categorySchema = new Schema({
    cat_name : {type : String, require : true},
    desc : {type : String},
});

const categoryModel = new model("category", categorySchema);
console.log(categoryModel);
module.exports = categoryModel;