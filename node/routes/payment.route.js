const express = require("express");
const router = express.Router();
const paycontroller = require("../controllers/payment.controller");

router.get("/",paycontroller.getPayDetails);

module.exports = router;