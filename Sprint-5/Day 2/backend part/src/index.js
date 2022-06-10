const express = require("express");
const app=express();
const port=process.env.PORT || 7878

app.use(express.json());
const userController = require("./controllers/usercontrollers");
const brandController=require("./controllers/brandcontrollers");
const cartController=require("./controllers/cartcontrollers")
const categoryController=require("./controllers/categorycontrollers")
const orderController=require("./controllers/ordercontrollers")
const productController=require("./controllers/productcontrollers")
const reviewController=require("./controllers/reviewcontrollers")

app.use("/users",userController)
app.use("/product",productController)
app.use("/brand",brandController)
app.use("/category",categoryController)
app.use("/order",orderController)
app.use("/review",reviewController)
app.use("/cart",cartController)




module.exports={app,port};