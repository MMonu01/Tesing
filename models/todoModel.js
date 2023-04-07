const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    title:String,
    status:Boolean
})


const todoModel = mongoose.model("todo",todoSchema)

module.exports = {todoModel}