const userModel = require("../Database/models/users");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
    try {
      const userData = req.body;
  
      const userExists = await userModel.findOne({ email: userData.email });
  
      if (userExists) {
        res.send({
          statusCode: 200,
          message: "User already exists. Please try to login",
          error: false,
          data: userExists,
        });
      } else
      {
      const hash = crypto.createHash("sha1");
      hash.update(userData.password + process.env.SALT);
      const hashPassword = hash.digest("hex");
  
      const newUser = new userModel({
        name: userData.name,
        email: userData.email,
        password: hashPassword,
        mobile_number: userData.mobile_number,
        dob: userData.dob,
        address: userData.address,
      });
  
      await newUser.save();
  
      const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY);
      res.send({
        statusCode: 200,
        message: "User created successfully",
        error: false,
        data: newUser,
        token: token,
      });
    }
    } catch (error) {
      res.send({
        statusCode: 400,
        message: error.message,
        error: true,
        data: null,
      });
    }
  };

exports.signin = async (req,res) =>
{
    try{
        const userData = req.body;
        const userExists = await userModel.exists({email: userData.email});
        if(!userExists)
        {
            res.send({
                statusCode: 200,
                message: "User doesn't exist. Try Signing Up first.",
                error: false,
                data: userExists,
              });
        }
        else{
        const hash = crypto.createHash("sha1");
        hash.update(userData.password + process.env.SALT);
        const hashPassword = hash.digest("hex");

        const User = new userModel({
            email: userData.email,
            password: hashPassword
        });
        await User.save();
        const userPwdExists = await userModel.exists({email: userData.email,password: userData.hashPassword});
        if(userPwdExists)
        {
            const tokenM = jwt.sign(
                { userId: userPwdExists._id },
                process.env.SECRET_KEY
              );
            res.send({
                statusCode: 200,
                message: "Credentials Matched.",
                // error: false,
                data: userPwdExists,
                token: tokenM,
            });
        }
        else{
            res.send({
                statusCode: 401,
                message: "Credentials Incorrect.",
                error: true,
                data: null,
            });
        }
    } 
    } catch(error) {
        res.send({
            statusCode: 400,
            message: error.message,
            error: true,
            data: null,
        });
    }
};