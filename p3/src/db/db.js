const mongoose = require("mongoose")
const dns = require('dns')

dns.setServers([
    '8.8.8.8',
    '1.1.1.1'
])

function connectToDB(){
    mongoose.connect("mongodb+srv://itsam13:gg0J3TYFOQElZQYi@cluster0.dshgcdv.mongodb.net/cohort")
    .then(()=>{
        console.log("Connected to DB");
        
    })
}

module.exports = connectToDB