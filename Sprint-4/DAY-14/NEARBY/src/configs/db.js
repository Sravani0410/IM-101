const mongoose=require("mongoose")

const connect=()=>{
    return mongoose.connect(
        "mongodb+srv://Sravani:Sandhya@cluster0.u6uyg.mongodb.net/nearBy?retryWrites=true"
        );
}
module.exports=connect;