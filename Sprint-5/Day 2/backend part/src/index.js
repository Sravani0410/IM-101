const express = require("express");
const app=express();

const port=process.env.PORT || 7878
app.use(express.json());
const userController = require("./controllers/usercontrollers");
const brandController=require("./controllers/brandcontrollers")

app.use("/users",userController)
app.use("/brand",brandController)


module.exports={app,port};