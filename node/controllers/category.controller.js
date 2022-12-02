const categoryModel = require("../Database/models/category");

exports.getcategoryDetails = async (req,res) =>{
    try{
        const categoryData = await categoryModel.find();
        res.send({
            statusCode : 200,
            message : "List of all categories",
            error : false,
            data : categoryData,
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