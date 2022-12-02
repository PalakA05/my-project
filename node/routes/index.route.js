const express = require("express");
const userRoutes = require("./user.route");
const productRoutes = require("./product.route");
const payRoutes = require("./payment.route");
const categoryRoutes = require("./category.route");
const cartRoutes = require("./cart.route");
const authRoutes = require("./auth.route");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

router.use("/auth",authRoutes);

router.use(authMiddleware.verifyToken);
router.use("/user",userRoutes);
router.get("/",(req,res) =>
{
    res.send("Welcome to my store server.");
});

router.use("/product",productRoutes);

router.use("/payment",payRoutes);

router.use("/category",categoryRoutes);

router.use("/cart" , cartRoutes);

module.exports = router;