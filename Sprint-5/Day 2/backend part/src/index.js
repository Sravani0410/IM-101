const express = require("express");
const app=express();

const port=process.env.PORT || 7878
app.use(express.json());
const userController = require("./controllers/usercontrollers");


app.use("/users",userController)


module.exports={app,port};