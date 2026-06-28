const express = require('express')
const connectToDB = require('./src/db/db')
const noteModel = require('./src/models/note.model')
const app = express()
app.use(express.json())

connectToDB() //server database se connect server.js file me 

//read
app.get('/notes', async (req, res) => {
    const notes = await noteModel.find()
    res.json({
        message: "notes fetched successfully",
        notes
    })
})

//create
app.post("/notes", async (req, res) => {
    const { title, content } = req.body
    console.log(title, content);
    await noteModel.create({
        title, content
    })
    res.json({
        message: "Note created successfully!"
    })
})


//delete
app.delete("/notes/:id", async (req, res) => {
    const noteID = req.params.id

    await noteModel.findOneAndDelete({
        _id: noteID
    })
    res.json({
        message: "Note deleted successfully!"
    })
})



//update
app.patch("/notes/:id", async (req, res) => {
    const noteID = req.params.id
    const {title} = req.body

    await noteModel.findOneAndUpdate({
        _id: noteID
    },{
        title: title
    })
    res.json({
        message: "Note updated successfully!"
    })
})
































app.listen(3000, () => {
    console.log("server is Running!");
})