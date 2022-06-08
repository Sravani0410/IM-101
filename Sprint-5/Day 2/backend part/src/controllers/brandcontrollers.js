const express = require("express");
const Brand = require("../models/brandmodel");

const router = express.Router();

router.get("/", async(req,res)=>{
    try{
        const brand= await Brand.find({}).lean().exec();
        return res.status(201).send(brand);
    }catch(err){
        res.status(500).send({message:err.message})
    }
  
});
router.get(("/:id"),async(req,res)=>{
    try {

        const brand=await Brand.findById(req.params.id).lean().exec()
        return res.status(200).send(brand);
        
    } catch (error) {

        return res.status(500).send(error.message);
    
    }

});

router.post("/", async(req,res)=>{
    try{
const brand= await Brand.create(req.body)
return res.status(201).send(brand);
    }catch(err){
        res.status(500).send({message:err.message})
    }
  
});
router.patch("/:id", async (req, res) => {
    try {
      const postbrand = await Brand.findByIdAndUpdate(req.params.id, req.body,{new:true})
        .lean()
        .exec();
      return res.status(200).send(postbrand);
    } catch (error) {
      return res.status(200).send(error.message);
    }

});

router.delete(("/:id"),async(req,res)=>{
    try {

        const brand=await Brand.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(brand);
        
    } catch (error) {

        return res.status(500).send(error.message);
    
    }

});
module.exports=router