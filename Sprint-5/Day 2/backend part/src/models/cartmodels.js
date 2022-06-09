const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",default:true},
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",default:true},
    count:{type:Number,default:1}
})
const Cart=mongoose.models("cart",cartSchema)
module.exports=Cart