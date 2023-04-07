const express = require("express")
const {todoModel} = require("../models/todoModel")

const todoRoutes = express.Router()




todoRoutes.post("/create",async(req,res)=>{

    const newItem= new todoModel(req.body)
    await newItem.save()
res.send("Item has been added")
})


todoRoutes.get("/",async(req,res)=>{
    const Items = await todoModel.find()
    res.send(Items)
})

todoRoutes.patch("/:todoId",async(req,res)=>{
    const id = req.params.todoId
    await  todoModel.findByIdAndUpdate({_id:id},req.body)

   res.send(`Item with id ${id} has been updated`)
})

todoRoutes.put("/:todoId",async(req,res)=>{
    const id = req.params.todoId
    await  todoModel.findByIdAndUpdate({_id:id},req.body)

   res.send(`Item with id ${id} has been updated`)
})


todoRoutes.delete("/:todoId",async(req,res)=>{
    const id = req.params.todoId
    await todoModel.findByIdAndDelete({_id:id})
    res.send(`Item with id ${id} has been deleted`)
})



module.exports ={todoRoutes}