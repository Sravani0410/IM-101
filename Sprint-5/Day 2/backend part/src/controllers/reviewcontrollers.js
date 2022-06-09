const express=require("express")
const Review=require("../models/reviewmodels")

const router=express.Router()

router.get("/",async(req,res)=>{
   try{
    const review=await  Review.find({}).lean().exec()
    return res.status(200).send(review)
   }
   catch(err){
    return res.status(400).send({message:err.message})
   }
})

router.get("/:id",async(req,res)=>{
    try{
     const review=await Review.findById(req.params.id).lean().exec()
     return res.status(200).send(review)
    }
    catch(err){
        return res.status(400).status({message:err.message})
    }
})

router.post("/",async(req,res)=>{
    try{
        const review=await  Review.create(req.body)
        return res.status(200).send(review)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
      const review=await  Review.findByIdAndUpdate(req.params.id,req.body,{new:true})
      return res.status(200).send(review)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
       const review=await Review.findByIdAndDelete(req.params.id).lean().exec()
       return res.status(200).send(review)
    }
    catch(err){
        return res.status(400).send({message:err.message})
    }
})
module.exports=router