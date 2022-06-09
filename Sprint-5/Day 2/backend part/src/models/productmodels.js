const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    category:{},
    options:[
        {
         type:{type:String,required:true},
         name:{type:String,required:true},
         brand:{type:String,required:true},
         image:{type:String,required:true},
         description:{type:String,required:true},
         price:{type:Number,reqired:true},
         strikedprice:{type:Number,required:true},
         color:{type:String,required:true},
         size:{type:Array,required:false},
         qty:{type:Number,required:true}
        }
    ],
}
,{
    timestamps:true,
    versionKey:false,
})