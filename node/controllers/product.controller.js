const productModel = require("../Database/models/product");

exports.getProductDetails = async (req,res) =>{
    try{
        const productData = await productModel.find();
        res.send({
            statusCode : 200,
            message : "List of all products",
            error : false,
            data : productData,
        });
    }
    catch(error){
        res.send({
            statusCode : 400,
            message : error.message,
            error : false,
            data : null,
        });
    }
};