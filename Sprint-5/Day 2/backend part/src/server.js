const {app,port}=require("./index.js")
const connect=require("./configs/db")


app.listen(port,async()=>{
    try{
       await connect()
       console.log(`listening to port ${port}`)
    }
    catch(err){
        console.log(err.message)
    }
})