const mongoose = require("mongoose");

const userSchema = new mongoose.Schema (
    {  
      
       name:{type:String},
       email:{type:String,required:true,unique:true},
       addresses:[
           {
               place:{type:String},
               mandal:{type:String},
               district:{type:String},
               state:{type:String},
               pincode:{type:Number},
               country:{type:String,default:"india"}
            }
        ],
        cart:[
            {
             productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",require:true}
           }
    ]
    },
    {
        versionKey:false,
        timestamps:true
    }
);
const User = mongoose.model("user",userSchema)
module.exports = User;