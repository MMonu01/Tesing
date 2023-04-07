const express = require("express")
require("dotenv").config()

const {connection} = require("./db")
const {todoRoutes} = require("./routes/todoRoutes")


const app = express()
app.use(express.json())
app.use("/todos",todoRoutes)




app.listen(process.env.port,async()=>{

    try{
        await connection
        console.log("mongo is connected")
    }
    catch(err){
        console.log("could not connect")
        console.log(err)
    }

    console.log("server is running")
})