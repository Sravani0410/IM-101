const express=require("express");
const { default: mongoose } = require("mongoose");
const app=express();
const mongoose=require("mongoose")

const connect=()=>{
    return mongoose.connect()
}