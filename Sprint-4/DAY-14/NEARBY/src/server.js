const app=require("./index")
const connect =require("./configs/db")

app.listen(9000,async(req,res)=>{
    try{
        await connect();
        console.log("connecting to 9000 port")
    }
    catch(err){
        console.log(err.message)
    }
})