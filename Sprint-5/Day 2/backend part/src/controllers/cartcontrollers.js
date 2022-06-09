const express=require("express")
const Cart=require("../models/cartmodels")

const router=express.Router()

router.get("/",async(req,res)=>{
   try{
    const cart=await Cart.find({}).lean().exec()
    return res.status(200).send(cart)
   }
   catch(err){
    return res.status(400).send({message:err.message})
   }
})

router.get("/:id",async(req,res)=>{
    try{
     const cart=await Cart.findById(req.params.id).lean().exec()
     return res.status(200).send(cart)
    }
    catch(err){
        return res.status(400).status({message:err.message})
    }
})

router.post("/",async(req,res)=>{
    try{
        const cart=await Cart.create(req.body)
        return res.status(200).send(cart)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
      const cart=await Cart.findByIdAndUpdate(req.params.id,req.body,{new:true})
      return res.status(200).send(cart)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
       const cart=await Cart.findByIdAndDelete(req.params.id).lean().exec()
       return res.status(200).send(cart)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
module.exports=router