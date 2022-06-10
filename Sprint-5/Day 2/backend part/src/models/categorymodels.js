const mongoose =require("mongoose")

const categorySchema=new mongoose.Schema({
    name:{type:String},
    ancestors:[{
        _id:{type:mongoose.Schema.Types.ObjectId,ref:"category"},
        name:{type:String},
    }],
       parentId:{type:mongoose.Schema.Types.ObjectId,ref:"category",default:null}
    },{
        timestamps:true,
        versionKey:false,
    }
    )
const Category=mongoose.model("category",categorySchema)
module.exports=Category