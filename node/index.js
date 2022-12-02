const mongoConnect = require("./Database/connection");
const router = require("./routes/index.route");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/",router);

const main = async () => {
    await mongoConnect.connectToDb();
};

main();
app.listen(process.env.PORT);