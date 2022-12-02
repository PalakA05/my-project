const payModel = require("../Database/models/payment");

exports.getPayDetails = async (req,res) =>{
    try{
        const payData = await payModel.find();
        res.send({
            statusCode : 200,
            message : "List of all payments",
            error : false,
            data : payData,
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