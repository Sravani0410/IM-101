const {app,port}=require("./index.js")
const connect=require("./configs/db")

const port=process.env.PORT || 6287
app.listen(port,async()=>{
    try{
       await connect()
       console.log(`listening to port ${port}`)
    }
    catch(err){
        console.log(err.message)
    }
})