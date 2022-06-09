const mongoose=require("mongoose");

const brandSchema=new mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",require:true},
    },
    {
        versionKey:false,
        timestamps:true
    }
)

const Brand=mongoose.model("brand",brandSchema);
module.exports=Brand;