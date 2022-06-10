const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",default:true},
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",default:true}
},{
    versionKey:false,
    timestamps:true
})
const Cart=mongoose.model("cart",cartSchema)
module.exports=Cart