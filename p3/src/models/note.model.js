const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: String,
    content: String
})

const noteModel = mongoose.model("note",noteSchema) //creating a model note is collection name

module.exports = noteModel