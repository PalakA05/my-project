const express = require("express");
const router = express.Router();
const productcontroller = require("../controllers/product.controller");

router.get("/",productcontroller.getProductDetails);

module.exports = router;