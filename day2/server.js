const express = require('express')

const app = express();
app.use(express.json()) //middleware

let notes = []


app.get('/notes',(req,res)=>{
    res.json(notes) 
})

app.post('/notes', (req, res) => {
    console.log(req.body);
    notes.push(req.body)
    res.json({
        message: "Notes added Successfully",
        notes: notes
    })
})

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index
    delete notes[index]
    res.json({
        message:"note deleted successfully"
    })
})

app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index
    const {title} = req.body
    notes[index].title = title

    res.json({
        message:"updated!!"
    })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");

});