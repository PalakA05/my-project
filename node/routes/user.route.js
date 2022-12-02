const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/user.controller");

router.get("/",usercontroller.getUserDetails);

module.exports = router;