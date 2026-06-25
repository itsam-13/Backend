const express = require('express')

const app = express() //created the server

app.get('/home', (req, res) => {
    res.send("Welcome")
})

app.get('/about', (req, res) => {
    res.send('welcome to about')
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");

})