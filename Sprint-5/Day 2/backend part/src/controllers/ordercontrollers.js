const express=require("express")
const Order=require("../models/ordermodels")

const router=express.Router()

router.get("/",async(req,res)=>{
   try{
    const order=await Order.find({}).lean().exec()
    return res.status(200).send(order)
   }
   catch(err){
    return res.status(400).send({message:err.message})
   }
})

router.get("/:id",async(req,res)=>{
    try{
     const order=await Order.findById(req.params.id).lean().exec()
     return res.status(200).send(order)
    }
    catch(err){
        return res.status(400).status({message:err.message})
    }
})

router.post("/",async(req,res)=>{
    try{
        const order=await Order.create(req.body)
        return res.status(200).send(order)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
      const order=await Order.findByIdAndUpdate(req.params.id,req.body,{new:true})
      return res.status(200).send(order)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
       const order=await Order.findByIdAndDelete(req.params.id).lean().exec()
       return res.status(200).send(order)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
module.exports=router