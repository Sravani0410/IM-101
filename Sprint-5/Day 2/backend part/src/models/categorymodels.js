const mongoose =require("mongoose")

const categorySchema=new mongoose.Schema({
    ancestors:[{
        _id:{type:mongoose.Schema.Types.ObjectId,ref:"category0",index:true},
        name:{type:String},
        slug:{type:String}
    }],
       parentID:{type:mongoose.Schema.Types.ObjectId,ref:"category",default:null}
    },{
        timestamps:true,
        versionKey:false,
    }
    )
    const Category=mongoose.models("category",categorySchema)
    module.exports=Category