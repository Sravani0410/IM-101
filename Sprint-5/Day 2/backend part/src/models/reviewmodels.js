const mongoose=require("mongoose")

const reviewSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",default:true},
    productId:{type:monhgoose.Schema.Types.ObjectId,ref:"product",default:true}
},{
    versionKey:false,
    timestamps:true
})
const Review=mongoose.models("review",reviewSchema)
module.exports=Review