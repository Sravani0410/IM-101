const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",default:true},
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",default:true}

},{
    timestamps:true,
    versionKey:false
})

const Order=mongoose.model("order",orderSchema)
module.exports=Order