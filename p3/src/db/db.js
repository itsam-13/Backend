const mongoose = require("mongoose")
const dns = require('dns')

dns.setServers([
    '8.8.8.8',
    '1.1.1.1'
])

function connectToDB(){
    mongoose.connect(process.config.MONGODB_URL)
    .then(()=>{
        console.log("Connected to DB");
        
    })
}

module.exports = connectToDB