const userModel = require("../Database/models/users");

exports.getUserDetails = async (req,res) =>{
    try{
        const userData = await userModel.find();
        res.send({
            statusCode : 200,
            message : "List of all users",
            error : false,
            data : userData,
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