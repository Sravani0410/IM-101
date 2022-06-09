const express=require("express")
const Product=require("../models/productmodels")

const router=express.Router()

router.get("/",async(req,res)=>{
   try{
    const product=await Product.find({}).lean().exec()
    return res.status(200).send(product)
   }
   catch(err){
    return res.status(400).send({message:err.message})
   }
})

router.get("/:id",async(req,res)=>{
    try{
     const product=await Product.findById(req.params.id).lean().exec()
     return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).status({message:err.message})
    }
})

router.post("/",async(req,res)=>{
    try{
        const product=await Product.create(req.body)
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
      const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
      return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
       const product=await Product.findByIdAndDelete(req.params.id).lean().exec()
       return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})