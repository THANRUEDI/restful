const express = require("express");
const app = express();
// get port number from enviroment settings
require('dotenv').config({path:'./config.env'});
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoute = require('./routes/product.route');
const customerRoute = require('./routes/customer.route');

// cross origin resource sharing
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// path url
// app.[method]();

// match GET localhost:4000/
app.get("/",(req,res)=>{
    res.send("Kruchanon");
});
//ใช้ productRoute เมื่อ request ขึ้นต้นด้วย /products
app.use("/products", productRoute);
app.use("/customers", customerRoute);

app.listen(port, () => {
  console.log("App started at port: " + port);
});