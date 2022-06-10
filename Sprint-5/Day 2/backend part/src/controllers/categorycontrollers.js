const express=require("express")
const Category=require("../models/categorymodels")

const router=express.Router();
router.get("/",async(req,res)=>{
    try{
      const category=await Category.find({}).lean().exec()
     return res.status(200).send(category)
    }
    catch(err){
      return  res.status(400).send(err.message)
    }
})

router.post("/",async(req,res)=>{
    const category=new Category({name:req.body.name})
    try{
        const newcategory=await category.save()
        res.status(200).send({response:`Category ${newcategory._id}`})
    }
    catch(err){
        res.status(400).send(err.message)
    }
     
})
module.exports=router


