const cartModel = require("../Database/models/cart");

exports.getCartDetails =async (req,res) => {
    try{
        const cartData = req.body;
        const cartExists = await cartModel.findOne({user_id : cartData.user_id});
        if(cartExists){
            res.send({
                statusCode : 200,
                message : "List of all the products ordered.",
                error : false,
                data : cartExists,
            });
        }
        else{
            const newCart = new cartModel({
                user_id : cartData.user_id,
                product_id : cartData.product_id,
                pay_id : cartData.pay_id,
            });
        }

    }
    catch(error)
    {
        res.send({
            statusCode : 400,
            message : error.message,
            error : false,
            data : null,
        });
    }
};